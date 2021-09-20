var numero = 1
{
  let numero = 2
  console.log('Escopo interior (let) = ' + numero)
}
console.log('Escopo exterior (var) = ' + numero)

/**
 * "let" possui escopo menor que "var", ent o primeiro console.log()
 * mostrar 2 e o segundo 1 (este com a variavel "var").
 */