/**
 * Mardkdown を HTML へ変換.
 *
 * @param {string} md
 * @returns {string}
 */
function toHtml(md) {
  return _entry_point_.toHtml(md)
}

/**
 * Mardkdown を HTML へ変換(sanitize 無し).
 *
 * @param {string} md
 * @returns {string}
 */
function toHtml_unsafe(md) {
  return _entry_point_.toHtml_unsafe(md)
}
