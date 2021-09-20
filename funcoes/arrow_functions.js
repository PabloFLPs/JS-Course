/**
 * Arrow functions sao sempre funcoes anonimas;
 * ou seja, precisam ser armazenadas em variaveis
 * para serem utilizadas.
 */

let dobro = function (a) {return 2*a}
dobro = (a) => {return 2*a}
dobro = a => 2*a //Retorno implicito

console.log(dobro(Math.PI))

let ola = function(){return 'Eae'}
ola = () => {return 'Ola'}
ola = () => 'Eae' //Retorno implicito
ola = _ => 'Eae' //Retorno implicito

console.log(ola())