//Cadeia de prototipos:
Object.prototype.atributo0 = "z"
const avo = {atributo1: "a"}
const pai = {__proto__: avo, atributo2: "b"}
const filho = {__proto__: pai, atributo3: "c"}

console.log(filho)
/**
 * Nao aparece os atributos pq estao cmo enumerable: false,
 * mas, se fizermos: 
 */
console.log(filho.atributo0, filho.atributo1, filho.atributo2, filho.atributo3)
//Entao vemos que "filho" possui os atributos herdados.