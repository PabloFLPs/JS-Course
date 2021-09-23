const pilots = ["Vettel", "Mazepin", "Verstappen", "Raikkonen", "Massa"]
console.log("Array:", pilots)
pilots.pop() //F F. Massa
console.log("RIP F. Massa:", pilots)
pilots.push("Hamilton") //Coe Hamilton
console.log("Alou Hamilton:", pilots)
pilots.shift() //pop() reverso, retira o primeiro
console.log("Tchau Vettel...", pilots)
pilots.unshift("Hamilton") //desfaz o shift e add Hamilton
console.log(pilots)
pilots.splice(0, 0, "Bottas", "Vettel")
console.log(pilots)
pilots.splice(2,0) //F double Hamilton
console.log(pilots)

//Novo array:
const otherPilotsA = pilots.slice(2)
console.log(otherPilotsA)
/**
 * Gerou outro array a partir da posicao 2
 * do array original.
 */

 const otherPilotsB = pilots.slice(1,5)
 console.log(otherPilotsB)
 /**
 * Gerou outro array a partir da posicao 1
 * ate a posicao 5, cm exececao do 5.
 */

console.log(pilots.propertyIsEnumerable(pilots.indexOf("Verstappen")))
console.log(pilots.keys())
console.log(pilots["1"])