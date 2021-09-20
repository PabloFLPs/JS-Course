let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo) //Converte para boolean de acordo com o valor original da variavel
console.log(!isAtivo)

console.log('Os de vdd rsrs...')
console.log(!!3)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('Os que n usam verde...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

let nome = ''
console.log(nome || 'Desconhecido') //Valor padrao de uma variavel
nome = 'Pablo F.'
console.log(nome || 'Desconhecido')