function rand({min = 1, max = 365}){
  /**
   * Aqui a gnt realiza a desestruturacao do parametro,
   * porem com valores padroes de 1 para min e 365 para
   * max.
   */
  const valor = Math.random()*(max-min)+min
  return Math.floor(valor)
}

const intervalo = {min: 10, max: 200}
console.log(rand(intervalo))
console.log(rand({min: 300}))

//Entao se tentarmos:
console.log(rand({}))
//Usara o valor padrao
//E
//console.log(rand())
//Dara erro ja que n ha o que desestruturar