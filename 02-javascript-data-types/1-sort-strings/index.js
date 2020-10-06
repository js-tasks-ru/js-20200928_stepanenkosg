/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
  return sortStringToOrient(arr, param === 'desc' ? -1 : 1);
}

function sortStringToOrient(arr, orient) {
  return [...arr].sort((a, b) => (orient * a.localeCompare(b, ['ru', 'en'], {caseFirst: 'upper'})));
}
