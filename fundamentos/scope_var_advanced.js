const valores = []

for(var i=0; i<10; i++){
  valores.push(
    function(){
      console.log(i)
    }
  )
  valores[i]()
  /**
   * Chamando valores[i] a cada iteracao, o escopo da funcao tem o valor
   * atual de i, por isso ao final do laco "for", ao chamar para qualquer
   * index de valores, sera retornado 10 (valor final de i).
   * 
   * Closure -> inner function always has access to the vars and parameters
   * of its outer function, even after the outer function return something.
   * 
   * Neste caso, a funcao "function" de valores se lembra do valor final
   * de i apos o termino da iteracao, e por isso, mesmo acessando:
   *  valores[5]()
   * Sera mostrado o valor 10.
   */
}

valores[2]()
valores[8]()

console.log(valores)
console.log(typeof valores)