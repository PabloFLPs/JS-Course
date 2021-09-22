console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array("Ichigo", "Hitsugaya", "Abarai")
console.log("Array:", aprovados)

aprovados = ["Ichigo", "Hitsugaya", "Abarai"]
console.log("Array:", aprovados)
console.log("Array[0]:", aprovados[0])
console.log("Array[2]:", aprovados[2])

aprovados[3] = "Rukia"
aprovados.push("Yoruichi")
console.log("Array:", aprovados)
console.log("Tamanho do Array:", aprovados.length)

aprovados[10] = "Ichida"
console.log("Array:", aprovados)
console.log("Tamanho do Array:", aprovados.length)
console.log("Posicao vazia e estritamente igual a undefined?", aprovados[8] === undefined)

console.log("Array sortido:", aprovados.sort())

delete aprovados[2]
console.log("Array[2] deletado:", aprovados) //nao reordena
console.log("Array[2] =", aprovados[2])

aprovados.splice(2,1) //retira 1 elemento a partir da posicao 2
console.log("Array[2] =", aprovados[2])
console.log("** SPLICE REORDENA!!! **")
aprovados.splice(5,5) //retira 5 elementos a partir da posicao 5
console.log("Array[2] deletado + Array[5] ate Array[5] deletados:", aprovados)

aprovados.splice(0,1, "Byakuya") //retira e substitui
console.log("Array[0] novo:", aprovados)
/**
 * Lembrando que o splice, no caso, ao retirar a "fatia",
 * reordena a ordem do array!
 */