/**
 * O "this" e variavel!
 * 
 * Contexto lexico:
 * Esta palavra reservada e lexica, ou seja
 * e definida quando sua funcao arrow tbm e
 * definida.
 * 
 * Isso quer dizer que, ao usar uma arrow
 * function, se ela utilizar "this", o this
 * n ira variar, ja que seu escopo e amarra-
 * do a funcao por esta ser do tipo arrow.
 */

this
global.module
module
globalThis

a = 0

console.log(this)
console.log(global.module)
console.log(module)
console.log(globalThis)
console.log(global.a)

const obj = {
  texto: 'Ola',
  function(){console.log(this.texto)}
}
obj.function()