/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
  const result = arr.slice().sort((a, b) => a.localeCompare(b, 'default', {caseFirst: 'upper'}));

  if (param === 'desc') return result.reverse();
  return result;
}
