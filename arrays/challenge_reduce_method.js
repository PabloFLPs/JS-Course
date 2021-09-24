const champs = [
  {nome: "Hecarim", danoBase: 87, lutador: true},
  {nome: "Ashe", danoBase: 74, lutador: false},
  {nome: "Yone", danoBase: 90, lutador: true},
  {nome: "Rakan", danoBase: 65, lutador: false},
  {nome: "Gwen", danoBase: 76, lutador: true}
]

//1. Todos os champs sao lutadores?
const todosLutadores = (acumulador, lutador) => acumulador && lutador
const saoTodosLutadores = champs.map(champ => champ.lutador).reduce(todosLutadores)
console.log(saoTodosLutadores)

//2. Algum champ e lutador?
const peloMenosUmLutador = (acumulador, lutador) => acumulador || lutador
const temLutador = champs.map(champ => champ.lutador).reduce(peloMenosUmLutador)
console.log(temLutador)