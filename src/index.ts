///<reference path="./index_src.js" />

// Apps Script のエディターで @typedef が認識されなかった.
// reference path で読み込んだ @typedef を export する方法が不明.
// declare の中で関数の定義で関数を定義する方法が不明.

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
