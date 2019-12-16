/**
 * Клонируем объект
 * @param {Object} obj - клонируем объект
 * @returns {Object} 
 */
function clone(obj) {
  if (obj === null) {
    return obj;
  }
  let obj2 = {};
  for (let key in obj) {
    if (typeof obj[key] === 'object') {
      obj2[key] = clone(obj[key]);
    } else {
      obj2 = Object.assign({}, obj);
    }
  }	 
  return obj2;
}
