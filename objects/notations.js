const a = 1, b = 1, c = 1
const obj1 = {a: a, b: b, c: c}
const obj2 = {a, b, c}
console.log(obj1, obj2)

const atributo = 'nota'
const valorAtributo = 2.4
const obj3 = {}
obj3[atributo] = valorAtributo
console.log(obj3)

const obj4 = {[atributo]: valorAtributo}
console.log(obj4)

const obj5 = {
  funcao1: function(){/** */},
  funcao2(){/** */}
}
console.log(obj5)