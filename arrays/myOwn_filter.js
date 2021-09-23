Array.prototype.myOwnFilter = function(callback){
  const newArray = []
  for(let index = 0; index < this.length; index++)
    if(callback(this[index], index, this)) //se retornar true:
      newArray.push(this[index])
  return newArray
}
/**
 * Se olharmos a documentacao do filter(), ha um outro
 * argumento, "thisArg", que e o valor a ser usado co-
 * mo "this" na execucao do callback.
 * 
 * Porem, utilizando ele:
 * 
 * function(callback, thisArg){}
 * 
 * Seria necessario usar o .apply() para "aplicar" o
 * contexto do outro "this" (nem eu entendi direito).
 */

const produtos = [
  {nome: "Macbook Air M1", preco: 8999.90, fragil: true},
  {nome: "Galaxy S21", preco: 2399.90, fragil: true},
  {nome: "Cubo Imas de Neodimio", preco: 139.90, fragil: false},
  {nome: "Taca de Vinho", preco: 29.90, fragil: true}
]

const retornaFragil = produto => produto.fragil == true
const retornaCaro = produto => produto.preco >= 1000
console.log(produtos.myOwnFilter(retornaFragil).myOwnFilter(retornaCaro))