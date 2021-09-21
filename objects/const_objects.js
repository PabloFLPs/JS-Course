//game -> endereco de memoria x -> {objeto}
const game = {nome: "Dishonored"}
console.log(game)
game.nome = "Persona 5"
console.log(game)
/**
 * Mesmo sendo um objeto const, foi possivel alterar
 * o atributo pq a referencia ao objeto nao mudou, ou
 * seja, seu endereco de memoria permanece intacto.
 * 
 * game = {nome: "Bloodborne"} //isso sim alteraria a
 * referencia.
 */

/**
 * Agora, para de fato "congelar" um objeto e impedir
 * alteracoes, e so usar o .freeze():
 */
Object.freeze(game)
game.nome = "NieR Automata"
//Nao da erro, mas n permite a alteracao.
console.log(game)