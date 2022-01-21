/**
 * gas-md2html
 * @author hankei6km
 * @copyright (c) 2022 hankei6km
 * @license MIT
 * see "LICENSE.txt" "OPEN_SOURCE_LICENSES.txt" of "md2html.zip" in
 * releases(https://github.com/hankei6km/gas-md2html/releases)
 */

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
