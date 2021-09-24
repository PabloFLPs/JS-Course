const champs = [
  {nome: "Hecarim", danoBase: 87, lutador: true},
  {nome: "Ashe", danoBase: 74, lutador: false},
  {nome: "Yone", danoBase: 90, lutador: true},
  {nome: "Rakan", danoBase: 65, lutador: false},
  {nome: "Gwen", danoBase: 76, lutador: true}
]

/**
 * Imperativo: baixo reuso de codigo; o inverso de
 * encapsulamento.
 * 
 * Descreve mais COMO algo deve ser feito.
 */
let total = 0
for(let index = 0; index < champs.length; index++)
  total += champs[index].danoBase
console.log(total/champs.length)

/**
 * Declarativo: grande reuso, aplica bem o encapsu-
 * lamento.
 * 
 * Descreve mais O QUE deve ser feito, sem se preo-
 * cupar com COMO sera feito.
 */
const getDano = champs => champs.danoBase
const soma = (acumulador, atual) => acumulador+atual
const media = 
console.log(champs.map(getDano).reduce(soma)/champs.length)

/**
 * EXEMPLO:select codigo,nome,email from clientes
 * where ativo=1
 * 
 * SQL e uma linguagem mais declarativa, n importa
 * como sera feita a busca acima, mas sim o que de-
 * ve ser feito.
 */