console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)
/**
 * O metodo "reverse()" nao esta presente em String,
 * porem, podemos add uma funcao que faca exatamente
 * o mesmo (no caso, o reverse() e de Arrays):
 */
String.prototype.reverse = function(){
  return this.split('').reverse().join('')
}
console.log("CEFET MG".reverse())

/**
 * O metodo "first()" n esta presente em Array, mas
 * advinhem? A gnt cria (e um metodo de String):
 */
Array.prototype.first = function(){
  return this[0]
}
console.log([2, 3, 4, 5, 6].first())