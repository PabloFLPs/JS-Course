const notas = [2.3, 8.9, 10, 3.4, 6.7, 7.1]

//Sem callback
let notasBaixas = []
for(let i in notas){
  if(notas[i] < 7) notasBaixas.push(notas[i])
}
console.log(notasBaixas)

//Com callback
notasBaixas = console.log(notas.filter(function(nota){
  return nota < 7
}))
/**
 * filter() e uma funcao callback de true ou false.
 * Com isso, sendo o retorno da function false, ela
 * nao retorna o valor do array, neste caso, a nota.
 */