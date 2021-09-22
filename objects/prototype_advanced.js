const carro = {
  velAtual: 0,
  velMax: 325,
  acelera(aceleracao){
    if(this.velAtual + aceleracao <= this.velMax) this.velAtual += aceleracao
    else this.velAtual = this.velMax
  },
  status(){return `${this.velAtual}Km/h de ${this.velMax}Km/h.`}
}

const koenigsegg = {
  modelo: "Agera R",
  velMax: 390 //shadowing
}
/**
 * Lembrando que, sendo koenigsegg posuindo
 * velMax diferente de carro, este atributo
 * ira sombrear o atributo da classe super.
 */

const pagani = {
  modelo: "Zonda",
  status(){
    return `${this.modelo}: ${super.status()}`
    //this - objeto atual, super - classe pai.
  }
}

Object.setPrototypeOf(koenigsegg, carro)
Object.setPrototypeOf(pagani, carro)
/**
 * koenigsegg e pagani possuem carro como seu
 * prototipo.
 */

console.log(koenigsegg)
console.log(pagani)

koenigsegg.acelera(30)
console.log(koenigsegg.status())

pagani.acelera(40)
console.log(pagani.status())