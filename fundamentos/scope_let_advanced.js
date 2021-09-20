const valores = []

for(let i=0; i<10; i++){
  valores.push(
    function(){
      console.log(i)
    }
  )
  //valores[i]()

  //Varios "i" do tipo let armazenados??
}

valores[2]()
valores[8]()

/**
 * E mostrado 2 e 8 como esperado; como var possui escopo global quando e
 * feita a ultima alteracao de seu valor na ultima iteracao do laco "for",
 * seu valor para todo o escopo e exatamente este. No caso do let, isso n
 * acontece, ja que o let possui escopo local, ent meio que "e armazenado"
 * cada um de seus valores na chamada da funcao de valores.
 */