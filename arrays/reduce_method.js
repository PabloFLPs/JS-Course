const champs = [
  {nome: "Hecarim", danoBase: 87, lutador: true},
  {nome: "Ashe", danoBase: 74, lutador: false},
  {nome: "Yone", danoBase: 90, lutador: true},
  {nome: "Rakan", danoBase: 65, lutador: false},
  {nome: "Gwen", danoBase: 76, lutador: true}
]

console.log("Danos:",champs.map(atributo => atributo.danoBase))
const danoTotal = champs.map(atributo => atributo.danoBase).reduce(function(acumulador, atual){
  console.log(acumulador, atual)
  //acumulador e a nossa "callback"
  return acumulador+atual
},0) //valor inicial a ser acumulado (se n for add, ele e desconsiderado)
console.log("Dano Total:",danoTotal)