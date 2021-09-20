/**
 * Quando atribuimos o valor de uma variavel que possui conteudo de tipo
 * primitivo a outra variavel, esta ultima recebe o valor da original.
 * 
 * Quando atribuimos o valor de uma variavel que possui conteudo de tipo
 * objeto a outra variavel, esta ultima passa a ser apenas um ponteito
 * para a original; assim, alterando o valor da ultima, sera alterado tbm
 * o valor da original.
 */

const a = {nome: 'Pablo'}
/**
 * Mesmo declarada como const, sendo tipo objeto, seus atributos podem ser
 * alterados.
 */
let b = a
console.log(a,b)
b.nome = 'Felipe'
console.log(a,b)

const a1 = 5
b = a1
console.log(a1,b)
b = 10
console.log(a1,b) //Mostrara "5 10", a1 n foi alterada.

/******************************************************************************/
let valor //Nao inicializada
console.log(valor) //Undefined
//console.log(valor1) //Is not defined

valor = null //Ausencia de valor
console.log(valor)
//Null e Undefined n tem a propriedade "toString"

const prod = {}
console.log(prod)
console.log(prod.preco)
//console.log(prod.preco.a) //Erro, ja que preco, sendo por si so undefined n tem a propriedade "a"

prod.preco = 3.90
console.log(prod)
console.log(prod.preco)

prod.preco = null
console.log(prod)
console.log(prod.preco)
console.log(!!prod.preco)

prod.preco = undefined
console.log(prod)
console.log(prod.preco)
console.log(!!prod.preco)