Array.prototype.myOwnReduce = function(callback, valorInicial){
  //validando o termo inicializador
  let acumulador = valorInicial || this[0]
  for(let index = 0; index < this.length; index++)
    acumulador = callback(acumulador, this[index], index, this)
  return acumulador
}

const soma = (total, valor) => total + valor
const nums = [1,2,3,4,5,6,7,8,9,10]
console.log(nums.myOwnReduce(soma,0))
/**
 * Lembrando que, o 0 cmo 2 parametro da funcao
 * nao faz diferenca, e so p lembrar que da para
 * adicionarmos o valor inicializador.
 * 
 * Ou seja, e o mesmo que:
 * console.log(nums.myOwnReduce(soma))
 */
