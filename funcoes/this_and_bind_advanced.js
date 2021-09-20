function Pessoa(){
  this.idade = 0
  //const self = this
  //setInterval(function(){Pessoa.idade++; console.log(Pessoa.idade)
  setInterval(function(){this.idade++; console.log(this.idade)
  }, 1000)
}

new Pessoa

/**
 * O "this" sempre tera escopo maior do que o metodo que ele
 * pertence, se pertencer a um metodo.
 * 
 * Diferente de funcoes.
 */