//Destructuring objects:
const pessoa = {
  nome: 'Pablo',
  idade: 22,
  gostos: {
    animeFav: 'Bleach',
    gameFav: 'GoW 2018',
    musicFav: 'Teardrops BMTH'
  }
}

const {nome, idade} = pessoa
console.log(nome, idade)

//Destructuring arrays:
const [a] = [10]
console.log(a)

const [,[,nota]] = [[7,6,10], [2,3,9], [8,5,8]]
console.log(nota)