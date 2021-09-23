const produtos = [
  {nome: "Macbook Air M1", preco: 8999.90, fragil: true},
  {nome: "Galaxy S21", preco: 2399.90, fragil: true},
  {nome: "Cubo Imas de Neodimio", preco: 139.90, fragil: false},
  {nome: "Taca de Vinho", preco: 29.90, fragil: true}
]

console.log(produtos.filter(function(produto){
  /**
   * Lembrando que por usarmos uma condicao
   * "true or false", para a igualdade deve
   * ser usado o "==".
   */
  return produto.nome == "Macbook Air M1"
  /**
   * Entao basicamente, o elemento produto
   * em que a condicao que demos der "true"
   * sera retornado dentro do array resul-
   * tante do filter().
   * 
   * Tanto que, se trocarmos o return ali
   * por return true, todos os elementos se-
   * rao mostrados, e caso troquemos por re-
   * turn false, sera mostrado um [].
   */
}))

const retornaFragil = produto => produto.fragil == true
const retornaCaro = produto => produto.preco >= 1000
/**
 * Lembrando que, dessa forma n da certo:
 * console.log(produtos.filter(retornaFragil && retornaCaro))
 */
console.log(produtos.filter(retornaFragil).filter(retornaCaro))