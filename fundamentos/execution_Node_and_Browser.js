let a = 1
global.b = 2 //"Global" e equivalente a "Window" do navegador
this.c = 3

console.log('a =', a)
console.log('global.a =', global.a) //Printa "undefined", a variavel "a" foi declarada com "let", logo n possui escopo global
console.log('global.b =', global.b)
console.log('global.c =', global.c)

console.log('this.a =', this.a)
console.log('this.b =', this.b)
console.log('this.c =', this.c)

console.log('module.exports.c =', module.exports.c)
console.log('module.exports === this ->', module.exports === this)
console.log('global === this ->', global === this)

this.x = 234
this.y = true
this.z = ' '
console.log(this) //Printa tds as variaveis declaradas com "this"
console.log(module.exports) //Printa tds as variaveis declaradas com "this"
//console.log(global)

//Declarando variavel sem var, let ou const:
maluca = 'maluca' //N fazer isso
console.log('global.maluca =', global.maluca)