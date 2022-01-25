import { Root, Content } from 'hast'
import { fromMarkdown } from 'mdast-util-from-markdown'
import { toHast } from 'mdast-util-to-hast'
import { gfm } from 'micromark-extension-gfm'
import { gfmFromMarkdown } from 'mdast-util-gfm'
import { raw } from 'hast-util-raw'
import { sanitize } from 'hast-util-sanitize'
import { toHtml } from 'hast-util-to-html'

// この型を gas 側のコード(JSDoc の記述)で使う方法は ?
type MarkdownSource = string | number | (string | number)[][] | undefined

function md2hast(md: string) {
  const mdast = fromMarkdown(md, {
    extensions: [gfm()],
    mdastExtensions: [gfmFromMarkdown()]
  })
  return raw(
    toHast(mdast, { allowDangerousHtml: true }) || ({} as Root | Content)
  )
}

export function normalizeMarkdownSource(md?: MarkdownSource): string {
  if (md) {
    if (Array.isArray(md)) {
      return md.map((r) => r.map((c) => `${c}`).join('\n')).join('\n')
    }
    return `${md}`
  }
  return ''
}

export function md2html(md: MarkdownSource) {
  const hast = md2hast(normalizeMarkdownSource(md))
  return toHtml(sanitize(hast), { allowDangerousHtml: true })
}

export function md2html_unsafe(md: MarkdownSource) {
  const hast = md2hast(normalizeMarkdownSource(md))
  return toHtml(hast, { allowDangerousHtml: true })
}
