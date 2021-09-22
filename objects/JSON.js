const obj = {a:1, b:2, c:3, soma(){return a+b+c}}
console.log(JSON.stringify(obj))
//Notamos que, a funcao foi excluida do JSON.

console.log(JSON.parse('{"nome": "Yuta Okkotsu", "idade": 17, "shipping": "Zenin Maki"}'))
/**
 * E necessario iniciar com aspas simples e dps
 * usar aspas duplas para as "chaves" de todos
 * os atributos (lembrando que, strings devem)
 * ser escritas com aspas duplas mesmo estando
 * cmo "valores" das "chaves".
 */