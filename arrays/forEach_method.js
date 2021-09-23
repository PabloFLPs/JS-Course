const fav_characters = ["Ichigo", "Hitsugaya", "Chousou", "Nanamin", "Megumi", "Toji", "Hanami", "Maki", "Kurono"]

//indice. valor/nome:
fav_characters.forEach(function(nome, indice){
  console.log(`${indice + 1}. ${nome}`)
})

//Porem e mais comum usar somente o "value":
fav_characters.forEach(nome => console.log(nome))

//ForEach() recebe ate 3 parametros:
fav_characters.forEach(function(nome, indice, array){
  console.log(`${indice + 1}. ${nome}`)
  console.log(array)
})

//E para testar:
fav_characters.forEach(function(nome, indice, array, quarto){
  console.log(`${indice + 1}. ${nome}`)
  console.log(array)
  console.log(quarto) //ver se temos um quarto parametro
})
//Como vemos, o quarto e undefined, logo ele n existe.