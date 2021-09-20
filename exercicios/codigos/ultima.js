/**
 * Elabore uma função que recebe um objeto com estudantes e suas notas. As
 * notas de cada estudante estarão num array, conforme exemplo abaixo. Você
 * deverá calcular a média da nota de cada aluno e retornar um objeto com os
 * atributos nome e media, que indica o aluno que teve o melhor desempenho
 * nas notas.
 * 
 * Exemplo:
 * recerberMelhorEstudante({
 * Joao: [8, 7.6, 8.9, 6], // média 7.625
 * Mariana: [9, 6.6, 7.9, 8], // média 7.875
 * Carla: [7, 7, 8, 9] // média 7.75
 * }) // retornará { nome: "Mariana", media: 7.875 }
 */

const retornarMelhorEstudante = (estudantes) => {
  const {nomes, notas} = estudantes
  //Setando o primeiro aluno como a melhor media
  let alunoMelhorNota = {nome: nomes[0], media: notas[0].reduce((a, b) => a + b, 0)/notas[0].length}
  for(let i=1; i<notas.length; i++){
    //Iterando notas de CADA aluno
    for(let j=0; j<notas[i].length; j++){
      //Iterando CADA nota do aluno i
      let alunoPossivelMelhorNota = {nome: nomes[i], media: notas[i].reduce((a, b) => a + b, 0)/notas[i].length}
      //Se a media do alunoMelhorNota < alunoPossivelMelhorNota, troca seus valores
      if(alunoMelhorNota.notas < alunoPossivelMelhorNota.notas) alunoMelhorNota = alunoPossivelMelhorNota
    }
  }
  return alunoMelhorNota
}

const estudantes = {
  nomes: ['Pablo', 'Mariana', 'Alice', 'Julio'],
  notas: [[8, 7.6, 8.9, 10], [9, 6.6, 7.9, 8], [9, 4, 7, 9], [7, 7, 8, 9]]
}

console.log(retornarMelhorEstudante(estudantes))

/**
 * .reduce((a, b) => a + b, 0)
 * .reduce( (accum, curr) => accum + curr );
 * 
 * accum -> acumulador
 * curr -> valor
 */