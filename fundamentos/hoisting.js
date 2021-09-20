/**
 * Hoisting -> e o ato de mover as declaracoes de vars do codigo, para cima. Ou seja
 * nao havera erro de compilacao declarado uma variavel var apos sua utilziacao.
 */

console.log('variavel =', variavel) //"variavel = undefined"
var variavel = 1

console.log('variavel =', variavel1) //Cannot access "variavel1 before initialization"
let variavel1 = 1