//Para add metodos a uma entidade, e so usar o .prototype:
Array.prototype.myOwnForEach = function(callback){
  for(let index = 0; index < this.length; index++)
    callback(this[index], index, this) //value, index, array
}

const fav_characters = ["Ichigo", "Hitsugaya", "Chousou", "Nanamin", "Megumi", "Toji", "Hanami", "Maki", "Kurono"]

fav_characters.myOwnForEach(function(nome, indice){
  console.log(`${indice + 1}. ${nome}`)
  //lembrando que ser mostrado (indice + 1) na numeracao.
})