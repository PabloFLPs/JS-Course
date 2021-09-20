function Car(maxSpeed = 200, accel = 5){
  //atributo privado
  let actualSpeed = 0

  //metodo publico
  this.accelerate = function(){
    if(actualSpeed + accel <= maxSpeed) actualSpeed += accel
    else actualSpeed = maxSpeed
  }

  //metodo publico
  this.getActualSpeed = function(){
    return actualSpeed
  }
}

const renegade = new Car
renegade.accelerate()
console.log(renegade.getActualSpeed())

const koenigsegg = new Car(400, 40)
koenigsegg.accelerate() //acelera -> add a aceleracao a velocidade atual
koenigsegg.accelerate()
koenigsegg.accelerate()
console.log(koenigsegg.getActualSpeed())

console.log(typeof Car) //function, apesar de ser um "molde" para um objeto. Por isso, uma funcao construtora.
console.log(typeof koenigsegg) //objeto de fato, ja que e a propria instancia da funcao construtora.