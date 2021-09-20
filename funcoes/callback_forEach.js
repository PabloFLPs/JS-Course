const jogos = ["God of War 2018", "Spider Man", "Bloodborne", "Dishonored", "The Witcher 3"]

function imprime(nome, indice){console.log(`${indice+1}: ${nome}`)}

//FoEach em Arrays -> forEach(element, index)
jogos.forEach(imprime)
//jogos.forEach(jogos => console.log(jogos))