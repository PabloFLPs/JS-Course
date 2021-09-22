//Object.preventExtensions:
const produto = Object.preventExtensions({
  nome: "Bleach Vol.54", preco: 13.90, tag: "sale"
})
console.log("Extensivel?", Object.isExtensible(produto))

produto.nome = "Jujusu Kaisen 0"
produto.descricao = "Introducao da historia de Yuta Okkotsu, remake do oneshot da historia principal."
delete produto.tag
console.log("Produto ->", produto)

//Object.seal:
//const personagem = {nome: "Gojou Satoru", idade: "23"}
//Object.seal(personagem)
const personagem = Object.seal({
  nome: "Gojou Satoru", idade: 23
})
console.log("Selado?", Object.isSealed(personagem))
personagem.tecnica = "Six Eyes|Limitless" //nd acontece
delete personagem.nome //nd acontece
personagem.idade = null //faz a alteracao
console.log(personagem)