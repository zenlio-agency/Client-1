import { HUBS } from "@/data/site.ts";

/**
 * Facts shared by every legal page, kept in one place so the notices never
 * disagree. The Markdown in `src/content/legal/` uses them as `{{key}}`
 * tokens (see `LEGAL_TOKENS`). Bracketed values are placeholders for counsel
 * and ManyaIT to confirm; they show with the "confirm before launch" marker.
 */
export const LEGAL = {
  usEntity: HUBS[0].entity,
  usIncorporation: "[State of incorporation]",
  usAddress: HUBS[0].address,
  indiaEntity: HUBS[1].entity,
  indiaCin: "[CIN]",
  indiaAddress: HUBS[1].address,
  privacyEmail: "[privacy@manyait.com]",
  legalEmail: "[legal@manyait.com]",
  careersEmail: "[careers@manyait.com]",
  accessibilityEmail: "[accessibility@manyait.com]",
  grievanceOfficer: "[Name]",
  /** How soon a privacy request is acknowledged. */
  acknowledge: "[72 hours]",
  /** How long a Talent Network profile is kept without renewal. */
  talentRetention: "[12] months",
  /** How soon accessibility feedback gets a reply. */
  accessibilityReply: "[5] business days",
} as const;

/** The legal pages, in footer order. The hub lists the documents itself. */
export const LEGAL_LINKS = [
  { label: "Privacy", href: "/legal/privacy" },
  { label: "Terms", href: "/legal/terms" },
  { label: "Cookies", href: "/legal/cookies" },
  { label: "Accessibility", href: "/legal/accessibility" },
  { label: "Privacy Requests", href: "/legal/privacy-requests" },
  { label: "Legal", href: "/legal" },
] as const;

export const PRIVACY_REQUESTS_HREF = "/legal/privacy-requests";

/** A mail link that keeps any placeholder brackets out of the address. */
export const mailLink = (address: string) =>
  `<a href="mailto:${address.replace(/[[\]]/g, "")}">${address}</a>`;

const oneLine = (address: string) => address.replace(/\n/g, ", ");

/** Values for the `{{key}}` tokens in the legal Markdown. May be HTML. */
export const LEGAL_TOKENS: Record<string, string> = {
  usEntity: LEGAL.usEntity,
  usIncorporation: LEGAL.usIncorporation,
  usAddress: oneLine(LEGAL.usAddress),
  indiaEntity: LEGAL.indiaEntity,
  indiaCin: LEGAL.indiaCin,
  indiaAddress: oneLine(LEGAL.indiaAddress),
  privacyEmail: mailLink(LEGAL.privacyEmail),
  legalEmail: mailLink(LEGAL.legalEmail),
  careersEmail: mailLink(LEGAL.careersEmail),
  accessibilityEmail: mailLink(LEGAL.accessibilityEmail),
  grievanceOfficer: LEGAL.grievanceOfficer,
  acknowledge: LEGAL.acknowledge,
  talentRetention: LEGAL.talentRetention,
  accessibilityReply: LEGAL.accessibilityReply,
  requestForm: `<a href="${PRIVACY_REQUESTS_HREF}">privacy request form</a>`,
};
