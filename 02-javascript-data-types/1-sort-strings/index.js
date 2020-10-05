/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
  let orient = 1;

  if (param === 'desc') orient = -1;

  return [...arr].sort((a, b) => compareStr(a, b, orient));
}

function compareStr(a, b, orient) {
  return orient * a.localeCompare(b, ['ru', 'en'], {caseFirst: 'upper'});
}
