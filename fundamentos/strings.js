const escola = 'CEFET Campus 2'

console.log(escola.charAt(4))
console.log(escola.charAt(14)) //N dara erro, apenas n printara nd
console.log(escola.charCodeAt(13)) //Codigo Unicode do char em questao
console.log(escola.indexOf('2')) //Retorna a posicao do char

console.log(escola.substring(1)) //Retorna a string a partir do x char
console.log(escola.substring(0, 4)) //Retorna a string entre a posicao x a y

console.log('Universidade '.concat(escola).concat('!!!'))
console.log('Universidade ' + escola + '!!!')
console.log(escola.replace(/\d/g, 'III')) //Regex - expressao regular

/**
 * Expressao Regular: metodo formal para especificar um padrao de texto
 * - procura;
 * - substituicao;
 * - validacao;
 * - filtragem.
 */

 console.log(escola.replace(2, 'III')) //Faz o msm
 console.log('Pablo, Felipe, Fernandes, Cardozo'.split(', ')) //split() tbm funciona com Regex