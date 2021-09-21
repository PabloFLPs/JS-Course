const sequenciaNumeros = {
  _valor: 0,
  /**
   * nao torna o atributo privado, mas e
   * uma convencao para os devs saberem
   * que n e para ser um atributo total-
   * mente livre.
   */
  get valor(){return this._valor++},
  set valor(valor){
    if(valor > this._valor) this._valor = valor
  }
}
console.log(sequenciaNumeros.valor, sequenciaNumeros.valor)
/**
 * Notamos que, n temos acesso ao atributo
 * "valor" de fato, e sim ao metodo get();
 * e para altera lo, basta usar o set():
 */
sequenciaNumeros.valor = 10
console.log(sequenciaNumeros.valor, sequenciaNumeros.valor)
sequenciaNumeros.valor = 100
console.log(sequenciaNumeros.valor, sequenciaNumeros.valor)