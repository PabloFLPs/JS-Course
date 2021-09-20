function getPreco(imposto = 0, moeda = "R$"){
  return `${moeda} ${this.preco * (1-this.desconto) * (1+imposto)}`
}

global.preco = 20
global.desconto = 0.1
console.log(getPreco())

const produto = {
  nome: "God of War - Ragnarok (Collector's Edition)",
  preco: 899.90,
  desconto: 0.2,
  getPreco
}


console.log(produto.getPreco())
console.log(getPreco.call(produto))
console.log(getPreco.apply(produto))

/**
 * Bom, entao qual o sentido de usar call() e
 * apply(), ja que e so chamar pela instancia
 * do objeto cmo acima?
 * 
 * Se liga:
 */

const actionFigure = {
  nome: "Kratos - Ghost of Sparta (GoW 3)",
  preco: 589.90,
  desconto: 0.15
}

//Reparemos que o atributo getPreco n existe...
//console.log(actionFigure.getPreco()) //Erro
console.log(getPreco.call(actionFigure))
console.log(getPreco.apply(actionFigure))

/**
 * Com isso, usamos um metodo especifico de uma
 * instancia de objeto em um objeto que nao pos-
 * este metodo como atributo!!!
 * 
 * I N S A N O
 */