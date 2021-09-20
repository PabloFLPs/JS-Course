/*
function toUpper(objeto){
  return objeto.nomeDaPessoa.toUpperCase() + '!!!'
}

const pessoa = {nome: 'Pablo'}
console.log(toUpper(pessoa)) //Dara erro, "nomeDaPessoa" esta indefinido
*/

function trataErro(erro){
  throw new Error('...')
}

function toUpper(objeto){
  try{
    //return objeto.nome.toUpperCase() + '!!!'
    console.log(objeto.nome.toUpperCase() + '!!!')
  }catch(erro){
    trataErro(erro)
  }finally{
    console.log('The END!') //Finally sai antes do try/catch???
    //Nao, e por causa do console.log()
  }
}

const pessoa = {nome: 'Pablo'}
//console.log(toUpper(pessoa))
toUpper(pessoa)