//Escopo global:
{{
    var sera = 'Sera cara??' //Var possui escopo global
    /**
     * Lembrando que, com escopo global, no caso do tipo var, se declarada
     * dentro de uma function, seu escopo e apenas a function.
     */
  }}
console.log(sera)

//Escopo local:
{{
    let eai = 'Eai??' //Let possui escopo local, entao o console log nao funcionara
  }}
console.log(eai)