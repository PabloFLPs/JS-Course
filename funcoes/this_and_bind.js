const personagem = {
  nome:'Kratos',
  fala:'I AM THE GOD OF WAR!!!',
  grito(){
    //console.log(personagem.fala)
    console.log(this.fala)
  }
}

personagem.grito()

const gritoGuerra = personagem.grito
/**
 * Nao estamos chamando a funcao, estamos declarando uma variavel como um
 * dos atributos de um objeto, e este atributo, e uma funcao.
 */
gritoGuerra()
/**
 * Agr sim, chamando de fato a funcao, porem o "this" possui referencia a
 * "personagem", e neste caso, "gritoGuerra" n tem o atributo fala
 */

const gritoGuerraBinded = personagem.grito.bind(personagem)
gritoGuerraBinded()
/**
 * Agora sim, com o bind "prendendo" gritoGuerraBinded a "personagem", e
 * possivel chamar o metodo normalmente sem nenhum erro.
 */