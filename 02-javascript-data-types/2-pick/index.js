/**
 * pick - Creates an object composed of the picked object properties:
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to pick
 * @returns {object} - returns the new object
 */
export const pick = (obj, ...fields) => {

  const result = Object.assign({}, obj);

  for (let key of Object.keys(obj)) {
    if (!fields.includes(key)) delete result[key];
  }

  return result;
};
