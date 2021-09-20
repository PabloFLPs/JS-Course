/**
 * Arguments: td funcao possui o parametro arguments.
 * Se n for passado nenhum paramaetro, arguments e um
 * vetor vazio.
 * 
 * Arguments e um parametro variavel.
 */

function soma(){
  let soma = 0
  for(i in arguments){
    soma += arguments[i]
  }
  return soma
}

console.log(soma(1.1, 1.2, 4.3, 5.4, 6.7))
console.log(soma(2, 3, 4, 5, ' Teste', ' - ', 'Parametros Variaveis!'))