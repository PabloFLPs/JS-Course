let comparaThis = function(parameter){
  console.log(this === parameter)
}

comparaThis(global) //this === parameter: true
comparaThis(this) //this === this: false (rsrs)

const obj = {}
comparaThis = comparaThis.bind(obj)
comparaThis(global)
comparaThis(obj) //Mudamos de escopo, ja que agr temos um obj

let comparaThisEmArrowFunction = parameter => console.log(this === parameter)
comparaThisEmArrowFunction(global)
comparaThisEmArrowFunction(this)
comparaThisEmArrowFunction(module.exports)