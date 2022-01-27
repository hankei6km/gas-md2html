/**
 * Mardkdown を HTML へ変換.
 *
 * @param {string|number|Array<Array<string|number>>|undefined} md
 * @returns {string}
 */
declare function toHtml(md: string | number | Array<Array<string | number>> | undefined): string;
/**
 * Mardkdown を HTML へ変換(sanitize 無し).
 *
 * @param {string|number|Array<Array<string|number>>|undefined} md
 * @returns {string}
 */
declare function toHtml_unsafe(md: string | number | Array<Array<string | number>> | undefined): string;
