//Armazenando uma funcao em uma variavel:
const imprimirSoma = function(a,b){
  console.log(a+b)
}
imprimirSoma(2,3)

//Armazenando uma funcao arrow em uma variavel:
const soma = (a,b) => {
  return a+b
}
console.log(soma(2,3))

//Retorno implicito:
const subtracao = (a,b) => a-b //Retorno da funcao, implicitamente
console.log(subtracao(2,3))

const imprimir = a => console.log(a)
imprimir('Hehe toppaware!')