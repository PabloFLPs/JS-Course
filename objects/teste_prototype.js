function MyObject(){}
console.log(MyObject.prototype)

const obj1 = new MyObject
const obj2 = new MyObject

console.log(obj1.__proto__ === obj2.__proto__)
console.log(MyObject.prototype === obj1.__proto__)

MyObject.prototype.nome = "Anonimo"
MyObject.prototype.falar = function(){console.log("E ai, meu nome e: ", this.nome)}

obj1.falar() //obj1.nome = MyObject.prototype.nome = "Anonimo"
obj2.nome = "Miss Fortune" //sombreamento de atributo
obj2.falar() //obj1.nome = "Miss Fortune"

const obj3 = {}
obj3.__proto__ = MyObject.prototype //heranca
obj3.nome = "Leona" //shadowing
obj3.falar()