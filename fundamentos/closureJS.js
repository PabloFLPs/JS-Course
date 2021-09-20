/**
 * Closure -> inner function always has access to the vars and parameters of its outer function, even after the ou-
 * ter function return something and even if the inner function is called separately.
 * 
 * "Uma closure (fechamento) é uma função que se "lembra" do ambiente — ou escopo léxico — em que ela foi criada."
 * 
 * Isto e exatamente o que acontece com uma variavel de iteracao para laco de repeticao "for" declarada como "var";
 * lembrando que isso e diferente de se lembrar dos valores anteriores cmo acontece com "let", neste caso, closure
 * e para o valor das "vars" naquele escopo; se forem alteradas, este valor final e o prevalescente.
 */

 function outerFunction() {
  var outerVariable = 1;
  function innerFunction() {
    console.log(outerVariable);
  }
  innerFunction();
}
outerFunction()

/**
 * In the above example, InnerFunction() can access outerVariable.
 */

function outerFunction() {
  var outerVariable = 100;
  function innerFunction() {
    console.log(outerVariable);
  }
  return innerFunction;
}
var innerFunc = outerFunction();
innerFunc(); // 100

/**
 * In the above example, return InnerFunction; returns InnerFunction from OuterFunction when you call
 * OuterFunction(). A variable innerFunc reference the InnerFunction() only, not the OuterFunction().
 * So now, when you call innerFunc(), it can still access the var outerVariable which is declared in
 * OuterFunction(). This is called Closure.
 */