/**
 * Crie uma função que recebe um número (de 1 a 12) e retorne o mês
 * correspondente como uma string. Por exemplo, se a entrada for 2,
 * a função deverá retornar "fevereiro", pois este é o 2° mês.
 * 
 * Exemplos:
 * nomeDoMes(1) // retornará "janeiro"
 * nomeDoMes(4) // retornará "abril"
 */

const mes = (numero) => {
  const month = new Array()
  month[0] = "January";
  month[1] = "February";
  month[2] = "March";
  month[3] = "April";
  month[4] = "May";
  month[5] = "June";
  month[6] = "July";
  month[7] = "August";
  month[8] = "September";
  month[9] = "October";
  month[10] = "November";
  month[11] = "December";
  console.log(month[numero-1])
}

mes(12)