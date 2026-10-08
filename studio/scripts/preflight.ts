/**
 * Runs before `npm run seed` and `npm run deploy`. It shows which project,
 * dataset and account they're about to use, and stops with the fix when
 * one is wrong, instead of a "project user not found" error halfway
 * through.
 */
import { readdirSync, readFileSync } from "node:fs";
import { getCliClient } from "sanity/cli";
import { API_VERSION, MANYAIT_PROJECT_ID } from "../lib/constants";

type Me = { id?: string; name?: string; email?: string };
type Project = { members?: { id: string; role?: string }[] };

const MANAGE = `https://www.sanity.io/manage/project/${MANYAIT_PROJECT_ID}/members`;

function stop(...lines: string[]): never {
  console.error(`\n✗ ${lines.join("\n  ")}\n`);
  process.exit(1);
}

/** Where a project id other than ManyaIT's comes from. Sanity reads the
    .env files in this folder; .env.example is only a template. */
function overrideSources(): string[] {
  const sources = readdirSync(".")
    .filter((file) => file.startsWith(".env") && file !== ".env.example")
    .filter((file) => {
      const value = readFileSync(file, "utf8").match(
        /^\s*SANITY_STUDIO_PROJECT_ID\s*=\s*["']?([\w-]+)/m,
      )?.[1];
      return value && value !== MANYAIT_PROJECT_ID;
    })
    .map((file) => `the file studio\\${file}: delete it, or the line in it`);
  return sources.length
    ? sources
    : [
        'a SANITY_STUDIO_PROJECT_ID environment variable: remove it in Windows (Start → "Edit environment variables for your account"), then open a new terminal',
      ];
}

async function main() {
  const client = getCliClient({ apiVersion: API_VERSION });
  const { projectId, dataset } = client.config();
  const account = client.withConfig({
    useProjectHostname: false,
    apiVersion: "2021-06-07",
  });

  console.log(`Project: ${projectId}   Dataset: ${dataset}`);
  if (projectId !== MANYAIT_PROJECT_ID) {
    stop(
      `This would use project ${projectId}, not ManyaIT's project ${MANYAIT_PROJECT_ID}.`,
      "The other project id comes from:",
      ...overrideSources().map((source) => `- ${source}`),
    );
  }

  const me = await account
    .request<Me>({ url: "/users/me" })
    .catch((error: { statusCode?: number }) => {
      if (error.statusCode === 401) {
        stop(
          "Your Sanity sign-in has expired. Sign in again:",
          "  npx sanity logout",
          "  npx sanity login",
        );
      }
      throw error;
    });
  if (!me.id) stop("You aren't signed in to Sanity. Run: npx sanity login");
  const who = [me.name, me.email && `<${me.email}>`].filter(Boolean).join(" ");
  console.log(`Signed in as: ${who}`);

  const noAccess = () =>
    stop(
      `${who} isn't a member of project ${projectId}.`,
      "Either sign in with an account that is:",
      "  npx sanity logout",
      "  npx sanity login",
      `or have the project's owner add this account as an Administrator at ${MANAGE}`,
    );
  const project = await account
    .request<Project>({ url: `/projects/${projectId}` })
    .catch(noAccess);
  const member = project.members?.find(({ id }) => id === me.id);
  if (project.members && !member) noAccess();
  if (member?.role) console.log(`Role: ${member.role}`);
  if (member?.role === "viewer") {
    stop(
      `${who} can only view project ${projectId}.`,
      `Ask the project's owner to make this account an Administrator at ${MANAGE}`,
    );
  }

  const datasets = await client.datasets.list().catch(noAccess);
  if (!datasets.some(({ name }) => name === dataset)) {
    stop(
      `Project ${projectId} has no "${dataset}" dataset.`,
      `Create it: npx sanity datasets create ${dataset} --visibility public`,
    );
  }
  console.log("✓ Ready.\n");
}

main().catch((error: Error) =>
  stop(`Couldn't check the project: ${error.message}`),
);
