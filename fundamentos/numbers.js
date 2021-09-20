const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1,peso2)
console.log(Number.isInteger(peso1))

const avaliac1 = 9.8394
const avaliac2 = 6.9827
const total = avaliac1 + avaliac2
const media = total / (peso1 + peso2)

console.log(media)
console.log(media.toFixed(2)) //Nao altera o valor de "media"
console.log(media.toString())
console.log(typeof media)
console.log(typeof Number)