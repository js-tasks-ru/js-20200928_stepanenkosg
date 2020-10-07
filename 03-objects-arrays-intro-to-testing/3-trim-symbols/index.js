/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {

  if (size === undefined) return string;

  let result = "";
  let prevSymbol = null;
  let currentSymbolSize = 0;

  for (const symbol of string.split('')) {

    if (symbol === prevSymbol) {
      currentSymbolSize++;
    } else {
      currentSymbolSize = 0;
      prevSymbol = symbol;
    }

    if (currentSymbolSize < size) {
      result += symbol;
    }
  }

  return result;
}
