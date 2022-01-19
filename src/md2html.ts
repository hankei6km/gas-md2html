import { fromMarkdown } from "mdast-util-from-markdown";
import { toHast } from "mdast-util-to-hast";
import { toHtml } from "hast-util-to-html";

export function md2html(md: string) {
  const mdast = fromMarkdown(md);
  const hast = toHast(mdast);
  if (hast) {
    return toHtml(hast);
  }
  return "";
}
