const pai = {nome: "Joel", corCabelo: "preto"}
const filha = Object.create(pai)

filha.nome = "Sarah"
console.log(filha) 
/**
 * nao possui atributos enumerable: true alem
 * de nome.
 */
console.log(`Cor do cabelo de ${filha.nome}:`,filha.corCabelo)

const filhaAdotiva = Object.create(pai, {
  nome: {value: "Ellie", writable: false, enumerable: true},
  corCabelo: {value: "castanho", writable: false, enumerable: true}
})
console.log(filhaAdotiva)
console.log(`Nome da filha adotiva: ${filhaAdotiva.nome}`)
filhaAdotiva.nome = "outra"
console.log(`${filhaAdotiva.nome} tem cabelo: ${filhaAdotiva.corCabelo}`)

console.log(Object.keys(filha))
console.log(Object.keys(filhaAdotiva))

for(let key in filha){
  filha.hasOwnProperty(key) ? console.log(key) : console.log(`Por heranca: ${key}`)
}