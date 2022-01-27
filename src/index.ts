/**
 * @typedef {string|number|Array<Array<string|number>>|undefined} MarkdownSource - Markdown ソース. Array の場合は '\n' で join される.
 */
type MarkdownSource = string | number | (string | number)[][] | undefined

// 未定義エラー回避のよくない対応.
// 実際は rollupjs でビルドしたファイルで定義されている.
declare var _entry_point_: any

/**
 * Mardkdown を HTML へ変換.
 *
 * @param {string|number|Array<Array<string|number>>|undefined} md
 * @returns {string}
 */
function toHtml(md: MarkdownSource): string {
  return _entry_point_.toHtml(md)
}

/**
 * Mardkdown を HTML へ変換(sanitize 無し).
 *
 * @param {string|number|Array<Array<string|number>>|undefined} md
 * @returns {string}
 */
function toHtml_unsafe(md: MarkdownSource): string {
  return _entry_point_.toHtml_unsafe(md)
}

// 循環参照回避用.
type EntryPoint = {
  toHtml: typeof toHtml
  toHtml_unsafe: typeof toHtml_unsafe
}
type ParamsToHtml = Parameters<EntryPoint['toHtml']>
type ParamsToHtml_unsafe = Parameters<EntryPoint['toHtml_unsafe']>

export declare namespace MD2html {
  /**
   * Mardkdown を HTML へ変換.
   */
  function toHtml(...args: ParamsToHtml): ReturnType<EntryPoint['toHtml']>
  /**
   * Mardkdown を HTML へ変換(sanitize 無し).
   */
  function toHtml_unsafe(
    ...args: ParamsToHtml_unsafe
  ): ReturnType<EntryPoint['toHtml_unsafe']>
  /**
   * Markdown ソース. Array の場合は '\n' で join される.
   */
  type MarkdownSource = ParamsToHtml[0]
}
