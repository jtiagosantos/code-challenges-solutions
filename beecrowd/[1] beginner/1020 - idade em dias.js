`
Leia um valor inteiro correspondente à idade de uma pessoa em dias e informe-a em anos, meses e dias

Obs.: apenas para facilitar o cálculo, considere todo ano com 365 dias e todo mês com 30 dias. Nos casos de teste nunca haverá uma situação que permite 12 meses e alguns dias, como 360, 363 ou 364. Este é apenas um exercício com objetivo de testar raciocínio matemático simples.

Entrada
O arquivo de entrada contém um valor inteiro.

Saída
Imprima a saída conforme exemplo fornecido.
`

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const ONE_YEAR_IN_DAYS = 365;
const ONE_MONTH_IN_DAYS = 30;

function main(age) {
  let year = 0;
  let month = 0;
  let day = 0;

  while(age > 0) {
    if (age >= ONE_YEAR_IN_DAYS) {
      age -= ONE_YEAR_IN_DAYS;
      year++;
    } else if (age >= ONE_MONTH_IN_DAYS) {
      age -= ONE_MONTH_IN_DAYS;
      month++;
    } else {
      day = age;
      age = 0;
    }
  }

  console.log(`${year} ano(s)`);
  console.log(`${month} mes(es)`);
  console.log(`${day} dia(s)`);
}

const [time] = lines.map((item) => Number(item));

main(time);