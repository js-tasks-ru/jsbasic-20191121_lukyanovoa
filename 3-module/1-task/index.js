/**
 * showSalary
 * @param {Array} data - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(data, age) {
  let sorted = data.filter(item => item.age <= age);
  let result = sorted.map(item => item.name + ', ' + item.balance);
  return result.join('\n');
}