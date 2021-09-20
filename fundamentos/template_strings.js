const nome = 'Pablo'
const concat = 'Ola ' + nome + '.'
const template = `Ola ${nome}!` //Template string com "back-tic", ou crase
console.log(concat, template)

const expressao = `1 + 1 = ${1+1}`
console.log(expressao)

const uppercase = texto => texto.toUpperCase()
console.log(`Eae... ${uppercase('aqui e o zangado!')}!`)

//Hmmmm
console.log(`Eae... ${('aqui e o zangado!').toUpperCase}!`)