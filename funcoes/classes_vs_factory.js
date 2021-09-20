//Classe:
class Pessoa{
  constructor(nome){
    this.nome = nome
  }
  falar(){
    console.log(`Meu nome e ${this.nome}`)
  }
}
const mimir = new Pessoa("Mimir")
mimir.falar()

//Factory function:
const criaPessoa = nome =>{
  return{
    falar: () => console.log(`Meu nome e ${nome}`)
  }
}
const baldr = criaPessoa("Baldr")
baldr.falar()

criaPessoa("Tyr").falar()

/**
 * Lembrando que, o uso do "this" na classe, implica
 * em possiveis erros. Por exemplo, usando a classe,
 * ao utilizar por exemplo, o comando no console do
 * browser:
 * document.getElementsByTagName('body')[0].onclick = mimir.falar()
 * 
 * Havera erro, pois o "this" mudara de escopo e o o
 * falar() resultara em "Meu nome e undefined".
 * 
 * Ao utilizar uma factory function, isso nao ocorre.
 */