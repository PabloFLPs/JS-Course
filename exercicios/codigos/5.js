/**
 * Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo
 * 
 * Exemplos:
 * maiorOuIgual(0, 0) // retornará true
 * maiorOuIgual(0, "0") // retornará false (nao mais)
 * maiorOuIgual(5, 1) // retornará false (???)
 */

const maiorIgual = (x,y) => {
  if(x >= y){
    return true
  }
  else{
    return false
  }
}

console.log(maiorIgual(0,0))
console.log(maiorIgual(0,"0"))
console.log(maiorIgual(5,1))