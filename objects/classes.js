class Lancamento{
  constructor(nome = "Generico", valor = 0){
    this.nome = nome
    this.valor = valor
  }
}

class CicloFinanceiro{
  constructor(mes, ano){
    this.mes = mes
    this.ano = ano
    this.lancamentos = []
  }

  addLancamentos(...lancamentos){
    lancamentos.forEach(lancamento => this.lancamentos.push(lancamento))
  }

  sumario(){
    let valorConsolidado = 0
    this.lancamentos.forEach(lancamento => {
      valorConsolidado += lancamento.valor
    })
    return valorConsolidado
  }
}

const salario = new Lancamento("Salario", 89000)
const contaPS5 = new Lancamento("PS5", -4899.90)
const contas = new CicloFinanceiro()
contas.addLancamentos(salario, contaPS5)
//console.log(contas.sumario())

const n_switch = new Lancamento("Nintendo Switch", -2449.90)
const zelda_botw = new Lancamento("Zelda BoTW - Nintendo Switch", -389.90)
const ring_fit = new Lancamento("RingFit - Nintendo Switch", -889.90)
contas.addLancamentos(n_switch, zelda_botw, ring_fit)
console.log(contas.sumario().toFixed(2)) //toFixed(2) -> 2 casas decimais