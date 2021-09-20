const obj1 = {}
obj1.nome = 'Kindle'

const obj2 = {}
obj2['nome'] = 'Kobo' //Outra notacao, lembrando que suporta ' ' (espaco), mas fica restrito a somente este tipo de acesso

console.log(obj1.nome)
console.log(obj2.nome)

//Instanciando uma "funcao":
function Obj(nome){
  this.nome = nome
}
const obj_console = new Obj('PS4')
const obj_portatil = new Obj('Switch Lite')
console.log(obj_console.nome)
console.log(obj_portatil.nome)