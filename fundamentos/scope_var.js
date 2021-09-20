var numero = 1
{
  var numero = 2
  console.log('Escopo interior =', numero)
}
console.log('Escopo exterior =', numero)

/**
 * Sendo "var" tendo escopo global, como nao temos uma funcao ali acima
 * var foi redefinida com o valor 2 passou a ter o valor 2 em ambos os
 * escopos; ou melhor, ha apenas 1 variavel var numero, e ela possui seu
 * valor igual a 2.
 */