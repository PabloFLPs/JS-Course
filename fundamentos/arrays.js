const valores = [7.7, 8.9, 3.5, 6.7]
console.log(valores[0], valores[1], valores[3])
console.log(valores[4])

valores[4] = 10.3 //Tamanho do array n e fixo, ent e possivel add valores dinamicamente
console.log(valores[4])
console.log(valores)
console.log(valores.length)

valores.push({id:3}, false, null, 'nome')
console.log(valores)

console.log(valores.pop()) //Printa o valor retirado
console.log(valores) //Printa o array sem o que foi retirado

delete valores[0] //<1 empty item>
console.log(valores)

console.log(typeof valores) //Object