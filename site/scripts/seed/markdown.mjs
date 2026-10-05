import { fromMarkdown } from "mdast-util-from-markdown";
import { gfmFromMarkdown } from "mdast-util-gfm";
import { gfm } from "micromark-extension-gfm";

/*
 * Markdown to Portable Text in the shape of the Studio's `articleBody`
 * (studio/schemaTypes/objects/richText.ts): paragraphs, h2/h3, quotes,
 * bullet and numbered lists, bold, italic, links and tables. Anything else
 * stops the seed, so nothing is dropped quietly.
 */

/**
 * Curly quotes and apostrophes, as Astro's Markdown renders them. `before`
 * is the character preceding the text, so a quote after a bold run still
 * closes.
 */
export function smartQuotes(text, before = "") {
  let out = "";
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const previous = i ? text[i - 1] : before;
    const opens = !previous || /[\s([{\u2014\u2013-]/.test(previous);
    if (char === '"') out += opens ? "\u201C" : "\u201D";
    else if (char === "'") out += opens ? "\u2018" : "\u2019";
    else out += char;
  }
  return out;
}

/** Plain text of an inline node, for table cells. */
const textOf = (node) =>
  node.type === "text"
    ? node.value
    : (node.children ?? []).map(textOf).join("");

export function markdownToBlocks(markdown, keyPrefix) {
  let count = 0;
  const key = () => `${keyPrefix}${(count++).toString(36)}`;

  /* The last character written in the current block, for smartQuotes. */
  let last = "";

  /** Inline nodes to spans, with marks and link definitions. */
  function spans(nodes, markDefs, marks = []) {
    const out = [];
    for (const node of nodes) {
      switch (node.type) {
        case "text": {
          const text = smartQuotes(node.value, last);
          last = text.at(-1) ?? last;
          out.push({ _type: "span", _key: key(), text, marks });
          break;
        }
        case "strong":
          out.push(...spans(node.children, markDefs, [...marks, "strong"]));
          break;
        case "emphasis":
          out.push(...spans(node.children, markDefs, [...marks, "em"]));
          break;
        case "link": {
          const def = { _type: "link", _key: key(), href: node.url };
          markDefs.push(def);
          out.push(...spans(node.children, markDefs, [...marks, def._key]));
          break;
        }
        case "break":
          out.push({ _type: "span", _key: key(), text: "\n", marks });
          break;
        default:
          throw new Error(`Markdown: unsupported inline "${node.type}"`);
      }
    }
    /* Neighbouring spans with the same marks become one. */
    return out.reduce((merged, span) => {
      const previous = merged.at(-1);
      if (previous && previous.marks.join() === span.marks.join()) {
        previous.text += span.text;
      } else merged.push(span);
      return merged;
    }, []);
  }

  function block(children, extra = {}) {
    const markDefs = [];
    last = "";
    return {
      _type: "block",
      _key: key(),
      style: "normal",
      ...extra,
      markDefs,
      children: spans(children, markDefs),
    };
  }

  function list(node, level) {
    const out = [];
    for (const item of node.children) {
      const paragraphs = item.children.filter((c) => c.type === "paragraph");
      if (paragraphs.length !== 1) {
        throw new Error("Markdown: a list item needs exactly one paragraph");
      }
      out.push(
        block(paragraphs[0].children, {
          listItem: node.ordered ? "number" : "bullet",
          level,
        }),
      );
      for (const child of item.children) {
        if (child.type === "list") out.push(...list(child, level + 1));
        else if (child.type !== "paragraph") {
          throw new Error(`Markdown: unsupported "${child.type}" in a list`);
        }
      }
    }
    return out;
  }

  const tree = fromMarkdown(markdown, {
    extensions: [gfm()],
    mdastExtensions: [gfmFromMarkdown()],
  });

  const blocks = [];
  for (const node of tree.children) {
    switch (node.type) {
      case "heading":
        if (node.depth !== 2 && node.depth !== 3) {
          throw new Error(
            `Markdown: only ## and ### headings (h${node.depth})`,
          );
        }
        blocks.push(block(node.children, { style: `h${node.depth}` }));
        break;
      case "paragraph":
        blocks.push(block(node.children));
        break;
      case "blockquote":
        for (const child of node.children) {
          blocks.push(block(child.children, { style: "blockquote" }));
        }
        break;
      case "list":
        blocks.push(...list(node, 1));
        break;
      case "table":
        blocks.push({
          _type: "table",
          _key: key(),
          rows: node.children.map((row) => ({
            _type: "tableRow",
            _key: key(),
            cells: row.children.map((cell) => smartQuotes(textOf(cell).trim())),
          })),
        });
        break;
      default:
        throw new Error(`Markdown: unsupported block "${node.type}"`);
    }
  }
  return blocks;
}
