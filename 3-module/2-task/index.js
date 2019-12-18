/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  let arr = str.split(' ');
  let arr1 = arr.filter(function(number) {
    return parseInt(number);
  });
  let arr2 = arr1.join();
  let arr3 = arr2.split(',');
  return {
    min: Math.min.apply(null, arr3),
    max: Math.max.apply(null, arr3)
  };		
}