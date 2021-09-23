Array.prototype.mOwnMap = function(callback){
  const newArray = []
  for(let index = 0; index < this.length; index++)
    newArray.push(callback(this[index], index, this))
  return newArray
}

//Retornar um array apenas com os precos a seguir:
const carrinho = [
  '{"nome": "Ghost of Tsushima", "preco": 139.90}',
  '{"nome": "Funko Shun de Andromeda", "preco": 89.90}',
  '{"nome": "Pelicula de Vidro - Switch", "preco": 32.90}',
  '{"nome": "Corte de Nevoa e Furia - Livro", "preco": 42.90}'
]

//Versao do curso:
const toObj = json => JSON.parse(json)
const retornaPrecos = produto => produto.preco
const precos = carrinho.mOwnMap(toObj).mOwnMap(retornaPrecos)
console.log(precos)