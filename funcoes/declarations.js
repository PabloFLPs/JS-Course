console.log(soma(1,2))
//console.log(mult(2,4)) //cannot access 'mult' before initialization

//function declaration
function soma(x,y){return x+y}

//function expression
const sub = function(x,y){return x-y}

//function named
const mult = function mult(x,y){return x*y}
console.log(mult(2,4))

/**
 * O JavaScript carrega todas as funcoes "declaradas"
 * previamente na interpretacao do codigo; antes da
 * execucao.
 * 
 * Por isso ha erro na segunda linha, ao tentar chamar
 * a funcao "mult()" sem ela ser declarada previamente.
*/