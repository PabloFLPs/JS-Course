/**
 * = -> atribuicao
 * == -> comparacao
 * === -> "estritamente igual", incluindo tipo
 */

console.log('01.', '1' == 1)
console.log('02.', '1' === 1)
console.log('03.', '1' != 1)
console.log('04.', '1' !== 1)

console.log('05.', undefined == null)
console.log('06.', undefined === null)

const date1 = new Date(0)
const date2 = new Date(0)
const date3 = date1

console.log('07.', date1 == date2)
console.log('08.', date1 === date2)
console.log('09.', date1 == date3)
console.log('10.', date1 === date3)