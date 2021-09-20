//Funcao factory e uma funcao que retorna um objeto.

/**
 * Obs.: Nao somente objetos, e possivel utilziar p
 * retornar funcoes tbm. Como por exemplo metodos de
 * get() e set() que sao bem padrao.
 */

//Simple factory:
function createCharacter(){
  return {
    name: 'Atreus',
    weapon: 'Bow'
  }
}

console.log(createCharacter())

//Normal factory:
function createPowerUp(name, description, damageType, damageDealing){
  return {
    name,
    description,
    damageType,
    damageDealing
  }
}
//Note que n ha necessidade de colocar "name: name, description: description, ...".
console.log(createPowerUp("Tyr's Revenge","Kratos focus on his Leviathan Axe channeling an ice wave. After 2 seconds, he releases 5 big ice waves lowering all enemies movement.","Runic","365"))