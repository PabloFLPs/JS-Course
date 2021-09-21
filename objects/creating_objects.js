//Notacao literal:
const obj1 = {}
console.log(obj1)

//Object on JS:
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

//Constructor functions:
function Produto(nome, preco, desconto){
  this.nome = nome
  this.getPreco = () => {
    return preco
  }
  this.getPrecoDesconto = () => {
    return preco * (1-desconto)
  }
}
const prod1 = new Produto('Macbook Air M1', 7899.90, 0.15)
const prod2 = new Produto('Kindle Oasis', 1199.90, 0.2)
console.log(prod1)
console.log("getPreco() ->", prod1.getPreco())
console.log("getPrecoDesconto() ->", prod1.getPrecoDesconto())
console.log(prod2)
console.log(prod2.getPrecoDesconto())

/**
 * Percebemos que, apesar de passar preco e desconto como parametros,
 * estes atributos estao encapsulados, e nao e possivel alterar-los
 * por meio do objeto; (e nem mesmo pelo metodo, ja que ele retorna)
 * o preco com desconto.
 * 
 * A questao do encapsulamento, principalmente no JS, e interessante
 * pq nao ha a necessidade de um atributo privado, neste caso. Como
 * temos um atributo encapsulado em forma de metodo, que utiliza ou-
 * tros atributos passados apenas como parametros, nao e possivel al-
 * terar diretamente.
 */

//Factory function:
function criaFuncionario(nome, salarioBase, faltas){
  return {
    nome,
    salarioBase,
    faltas,
    getSalario(){
      return (salarioBase/30)*(30-faltas)
    }
  }
}
const funcionario1 = criaFuncionario("Tobey Maguire", 560000, 3)
const funcionario2 = criaFuncionario("Dwayne Johnson", 1900000, 1)
console.log(funcionario1)
console.log(funcionario1.getSalario())
console.log(funcionario2)
console.log(funcionario2.getSalario())

//Object.create:
const personagem = Object.create(null)
console.log(personagem)
personagem.nome = "Miles Morales"
console.log(personagem)
console.log(personagem.nome)

//.parse
const fromJSON = JSON.parse('{"info": "...and Kratos cast himself from the highest mountain in all of Greece..."}')
console.log(fromJSON.info)
/**
 * Transformando o {"info": ""} em um objeto (JSON.parse),
 * fromJSON passa a ter o atributo "info", e por isso con-
 * seguimos acessar o fromJSON.info.
 */