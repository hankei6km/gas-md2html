import { Root, Content } from "hast";
import { fromMarkdown } from "mdast-util-from-markdown";
import { toHast } from "mdast-util-to-hast";
import { gfm } from "micromark-extension-gfm";
import { gfmFromMarkdown } from "mdast-util-gfm";
import { raw } from "hast-util-raw";
import { sanitize } from "hast-util-sanitize";
import { toHtml } from "hast-util-to-html";

function md2hast(md: string) {
  const mdast = fromMarkdown(md, {
    extensions: [gfm()],
    mdastExtensions: [gfmFromMarkdown()],
  });
  return raw(
    toHast(mdast, { allowDangerousHtml: true }) || ({} as Root | Content)
  );
}

export function md2html(md: string) {
  const hast = md2hast(md);
  return toHtml(sanitize(hast), { allowDangerousHtml: true });
}

export function md2html_unsafe(md: string) {
  const hast = md2hast(md);
  return toHtml(hast, { allowDangerousHtml: true });
}
