const _toHtml = _entry_point.toHtml
const _toHtml_unsafe = _entry_point.toHtml_unsafe

/**
 * Mardkdown を HTML へ変換.
 *
 * @param {string} md
 * @returns {string}
 */
function toHtml(md) {
  return _toHtml(md)
}

/**
 * Mardkdown を HTML へ変換(sanitize 無し).
 *
 * @param {string} md
 * @returns {string}
 */
function toHtml_unsafe(md) {
  return _toHtml_unsafe(md)
}

delete _entry_point
