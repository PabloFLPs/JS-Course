const personagem = {
  nome: "Doente Verde",
  descricao: "Bicho de fantasia verde que voa e solta bombinhas pela frente",
  idade: null,
  peso: null,
  villainRanking: 1
}

//Object.keys() -> retorna as chaves dos valores
console.log(Object.keys(personagem))

//Object.values() -> retorna os valores das chaves
console.log(Object.values(personagem))

//Object.entries() -> retorna um vetor com todos as "entradas
console.log(Object.entries(personagem))
/*
Object.entries(personagem).forEach(e => {
  console.log(`${e[0]}: ${e[1]}`)
})
*/
Object.entries(personagem).forEach(([chave, valor]) => {
  console.log(`${chave}: ${valor}`)
})

//Object.defineProperty() -> define propriedade k k k
Object.defineProperty(personagem, "realName", {
  //enumerable: true -> mostra junto aos atributos 
  enumerable: true,
  writable: false,
  value: "Norman Osborn"
})
console.log(personagem)

//Object.assign() - concatena objetos
const concat1 = {x:1, y:2, z:3}
const concat2 = {a:'a', b:'b', c:'c'}
const obj = Object.assign(concat1, concat2)
console.log(obj)

//Object.freeze() -> congela o obj e impede alteracoes
Object.freeze(obj)
obj.x = 1000
console.log(obj) //nao houve alteracao