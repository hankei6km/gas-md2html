const _toHtml = _entry_point.toHtml;

/**
 * Mardkdown を HTML へ変換.
 *
 * @param {string} md
 * @returns {string}
 */
function toHtml(md) {
  return _toHtml(md);
}

delete _entry_point;
