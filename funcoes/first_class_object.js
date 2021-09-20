/**
 * Funcao JS e um objeto first-class (citizens)
 * (Cidadao de Primeira Classe)
 */

function func1(){} //forma literal

const func2 = function(){} //armazenar em variavel

const array = [function(){}, func1()] //armazenar em array

const obj = {}
obj.falar = function(){console.log('Eae')} //armazenar em obj
obj.falar()

//Uma funcao pode retornar uma funcao:
function func(func){func()}
func(function(){console.log('Viu so?')})

function media3Numeros(a,b){return function(c){console.log((a+b+c)/3)}}
media3Numeros(4,5)(6)
/**
 * O retorno de media3Numeros() e uma funcao, logo
 * a media e dada por: (media3Numeros(a,b))(c), so
 * nao ha a necessidade dos parentese.
 */

//Tbm da na mesma o seguinte:
const media2Numeros = media3Numeros(4,5)
media2Numeros(6)