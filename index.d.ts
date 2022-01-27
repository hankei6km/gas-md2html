/// <reference path="index_src.d.ts" />
declare type EntryPoint = {
    toHtml: typeof toHtml;
    toHtml_unsafe: typeof toHtml_unsafe;
};
declare type ParamsToHtml = Parameters<EntryPoint['toHtml']>;
declare type ParamsToHtml_unsafe = Parameters<EntryPoint['toHtml_unsafe']>;
export declare namespace MD2html {
    /**
     * Mardkdown を HTML へ変換.
     */
    function toHtml(...args: ParamsToHtml): ReturnType<EntryPoint['toHtml']>;
    /**
     * Mardkdown を HTML へ変換(sanitize 無し).
     */
    function toHtml_unsafe(...args: ParamsToHtml_unsafe): ReturnType<EntryPoint['toHtml_unsafe']>;
    /**
     * Markdown ソース. Array の場合は '\n' で join される.
     */
    type MarkdownSource = ParamsToHtml[0];
}
export {};
