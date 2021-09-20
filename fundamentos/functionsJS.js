console.log(typeof Object) //Object e uma function

class Produto{}
console.log(typeof Produto) //Produto (class) e uma function

//Funcao sem retorno
function imprimeSoma(a,b){
  console.log(a+b)
}

imprimeSoma(2,4)
imprimeSoma(2) //Soma 2 + undefined, e retorna um NaN
imprimeSoma(2,4,4,6,3,5,23,4,121324) //Soma 2 + 4

//Funcao com retorn
function soma(a = 0,b = 0){
  return a+b
}
console.log(soma(2,3))
console.log(soma(2)) //Soma 2 + 0, que e o valor padrao de b
console.log(soma()) //NaN se n tratar o valor padrao de a sendo 0