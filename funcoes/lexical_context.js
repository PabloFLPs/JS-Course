const valor = "global"
function printaVariavel(){console.log(valor)}

function chamaFuncao(){
  const valor = "local"
  printaVariavel()
}

chamaFuncao()

/**
 * O interessante e que, apesar de acharmos que
 * printaVariavel() ira utilizar o "valor" igual
 * a "local", pertencente a funcao chamaFuncao()
 * pela qual a propria printaVariavel() e chama-
 * da, as funcoes carregam consigo o contexto le-
 * xico no qual foram declaradas.
 * 
 * Por isso, mesmo chamando a funcao printaVaria-
 * vel() pela chamaFuncao(), o valor printado se-
 * ra "global".
 */