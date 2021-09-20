let comparaThis = function(parameter){
  console.log(parameter)
  //console.log(globalThis === parameter)
  console.log(this === parameter)
}

comparaThis(global) //this === global: true
comparaThis(this) //this === this: false (rsrs)
comparaThis(globalThis) //this === globalThis: true (???)