/**
 * map() e um metodo usado para transformar um array.
 * 
 * Se um array tem 7 elementos, entao o resultado do
 * map() sera um array de 7 elementos.
 */

const array = [1,2,3,4,5]

let transformacao = array.map(function(elemento){
  return elemento * 2
})
console.log("Array:", array)
console.log("Dobro:", transformacao)

let quadrado = elemento => elemento * elemento 
console.log("Array:", array)
console.log("Quadrado:", array.map(quadrado))

let valorEmDinheiro = elemento => `R$ ${elemento},00`
//valorEmDinheiro = elemento => `R$ ${parseFloat(elemento).toFixed(2).replace('.',',')}`
console.log("Array:", array)
console.log("Em reais:", array.map(valorEmDinheiro))

//Here comes magic!!
let final = transformacao.map(quadrado).map(valorEmDinheiro)
/**
 * Como o map() retorna um array, e so fazer uma cha-
 * mada sequencial de metodos.
 * 
 * dobro.map(quadrado).map(valorDinheiro)
 * 
 * 2,4,6,8,10
 * 4,16,36,64,100
 * R$4,00,R$16,00,R$36,00,R$64,00,R$100,00
 */
console.log("Final:", final)