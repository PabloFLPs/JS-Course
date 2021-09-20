const prod1 = {}
prod1.nome = 'Ultra RTXsON Technology'
prod1.preco = 1000000.90
prod1['DescontoTop'] = 0.90 //O atributo n sai mais como string x'DescontoTop'x
console.log(prod1)

const prod2 = {
  nome: 'Jujutsu Kaisen 0',
  preco: 49.90,
  capitulos: { //Capitulos e um object dentro de um object
    nome: 'capitulo 1',
    paginas: 19
  }
}
console.log(prod2)

/**
 * Um object e diferente de um JSON
 */

'{"nome": "Jujutsu Kaisen", "preco": 49.90}' //Isso e um JSON