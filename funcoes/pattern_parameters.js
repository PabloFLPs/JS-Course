//Gerando valores padroes:

// ||
function soma1(a,b,c){
  a = a||1
  b = b||1
  c = c||1
  return a+b+c
}
console.log(soma1(), soma1(3), soma1(1,2,3), soma1(0,0,0)) //Percebemos de 0||1 = 1, ent n ha cmo somar 0+0+0.

// ?, in, isNaN()
function soma2(a,b,c){
  a = ( (a !== undefined) ? a:1)
  /**
   * a e igual a:
   * se a for diferente de undefined, a
   * se a for estritamente igual a undefined, 1
   */
   b = ( (1 in arguments) ? b:1)
   /**
   * b e igual a:
   * se index 1 em argumentos existir, b
   * se nao, 1 (nao passar um segundo argumento)
   */
   c = ( (!isNaN(c)) ? c:1)
   /**
   * c e igual a:
   * se c for um numero, c
   * se c for um NaN, 1
   */
   return a+b+c
}
console.log(soma2(), soma2(3), soma2(1,2,3), soma2(0,0,0))

// Valor padrao do ES2015:
function soma3(a=1,b=1,c=1){
  return a+b+c
}
console.log(soma3(), soma3(3), soma3(1,2,3), soma3(0,0,0))