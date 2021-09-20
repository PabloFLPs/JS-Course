//Function:
function Pessoa(nome){
  this.nome = nome

  this.falar = function(){
    console.log(`Meu nome e ${this.nome}`)
  }
}
/**
 * E possivel passaros apenas ${nome} no templatestring
 * e retirar o this.nome = nome, porem assim, perdemos
 * a possibilidade de alterar o atributo ja que nao te-
 * mos mais o apontador p o mesmo (obj.nome = undefined).
 * 
 * O "this" e necessario para a criacao de classes, di-
 * ferente de funcoes construtoras.
 */

const jormungandr = new Pessoa("Jormungandr")
jormungandr.falar()