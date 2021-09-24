const turmas = [{
  nome: "turma 1",
  alunos: [{
    nome: "Miles Morales",
    nota: 8.4
  },{
    nome: "Peter Parker",
    nota: 8.9}],
},{ //divisao de turmas
  nome: "turma 2",
  alunos: [{
    nome: "Dr. Octavius",
    nota: 9.8
  },{
    nome: "Harry Osborn",
    nota: 7.6}]
}]

const getNotaAluno = aluno => aluno.nota
const getNotasTurma = turma => turma.alunos.map(getNotaAluno)
const notas = turmas.map(getNotasTurma)

console.log(notas)
console.log("Como ficaria cm flatMap? ->",[].concat([ 8.4, 8.9 ], [ 9.8, 7.6 ])) //flatMap()!!!

//Implementando o flatMap():
Array.prototype.flatMap = function(callback){
  return Array.prototype.concat.apply([], this.map(callback))
}
console.log("flatMap() em acao:",turmas.flatMap(getNotasTurma))