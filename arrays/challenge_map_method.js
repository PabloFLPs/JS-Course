//Retornar um array apenas com os precos a seguir:
const carrinho = [
  '{"nome": "Ghost of Tsushima", "preco": 139.90}',
  '{"nome": "Funko Shun de Andromeda", "preco": 89.90}',
  '{"nome": "Pelicula de Vidro - Switch", "preco": 32.90}',
  '{"nome": "Corte de Nevoa e Furia - Livro", "preco": 42.90}'
]

//Minha versao:
const obj = []
carrinho.forEach(function(linha, index){
  obj[index] = JSON.parse(linha).preco
})
console.log(obj)

//Versao do curso:
const toObj = json => JSON.parse(json)
const retornaPrecos = produto => produto.preco
const precos = carrinho.map(toObj).map(retornaPrecos)
console.log(precos)