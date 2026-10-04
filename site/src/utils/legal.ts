import { tbc } from "@/data/site.ts";
import { LEGAL_TOKENS } from "@/data/legal.ts";
import { SITE_LOCALE } from "@/consts.ts";

const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;

/** An ISO date as a `<time>`, or a placeholder marked for review. */
export function legalDate(value: string): string {
  if (!ISO_DATE.test(value)) return tbc(value);
  const label = new Date(`${value}T00:00:00Z`).toLocaleDateString(SITE_LOCALE, {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
  return `<time datetime="${value}">${label}</time>`;
}

const plain = (html: string) => html.replace(/<[^>]+>/g, "").trim();

/**
 * Finishes the HTML rendered from a legal Markdown file. It fills the
 * `{{key}}` tokens from `LEGAL_TOKENS`, numbers each H2 and gives it a link
 * to itself, lets tables scroll sideways inside their own box, and marks
 * bracketed placeholders. An unknown token fails the build.
 */
export function finishLegalHtml(html: string): string {
  let section = 0;
  return html
    .replace(/\{\{\s*(\w+)\s*\}\}/g, (token, key: string) => {
      const value = LEGAL_TOKENS[key];
      if (value === undefined) throw new Error(`Unknown legal token ${token}`);
      return value;
    })
    .replace(
      /<h2 id="([^"]+)">([\s\S]*?)<\/h2>/g,
      (_, id: string, text: string) => {
        section += 1;
        return `<h2 id="${id}"><span class="legal_num">${section}.</span> ${text}<a class="legal_anchor" href="#${id}" aria-label="Link to section ${section}, ${plain(text)}">#</a></h2>`;
      },
    )
    .replace(
      /<table>/g,
      '<div class="legal_table" role="region" aria-label="Table" tabindex="0"><table>',
    )
    .replace(/<\/table>/g, "</table></div>")
    .replace(/>([^<]+)</g, (_, text: string) => `>${tbc(text)}<`);
}
