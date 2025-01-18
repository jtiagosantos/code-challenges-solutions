`
Leia um valor de ponto flutuante com duas casas decimais. Este valor representa um valor monetário. A seguir, calcule o menor número de notas e moedas possíveis no qual o valor pode ser decomposto. As notas consideradas são de 100, 50, 20, 10, 5, 2. As moedas possíveis são de 1, 0.50, 0.25, 0.10, 0.05 e 0.01. A seguir mostre a relação de notas necessárias.

Entrada
O arquivo de entrada contém um valor de ponto flutuante N (0 ≤ N ≤ 1000000.00).

Saída
Imprima a quantidade mínima de notas e moedas necessárias para trocar o valor inicial, conforme exemplo fornecido.

Obs: Utilize ponto (.) para separar a parte decimal.
`

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function main(amount) {
  const cash = {
    10000: 0,
    5000: 0,
    2000: 0,
    1000: 0,
    500: 0,
    200: 0,
  };
  const coins = {
    100: 0,
    50: 0,
    25: 0,
    10: 0,
    5: 0,
    1: 0,
  }
  amount *= 100;

  const cashValues = Object.keys(cash).sort((a, b) => b - a);

  for (let i=0; i<cashValues.length; i++) {
    const cashValue = cashValues[i];
    while(amount >= cashValue) {
      cash[cashValue] += 1;
      amount -= cashValue;
    }
  }

  const coinValues = Object.keys(coins).sort((a, b) => b - a);

  for (let i=0; i<coinValues.length; i++) {
    const coinValue = coinValues[i];
    while(amount >= coinValue) {
      coins[coinValue] += 1;
      amount -= coinValue;
    }
  }

  console.log('NOTAS:');
  Object.entries(cash).reverse().forEach(([note, quantity]) => {
    console.log(`${quantity} nota(s) de R$ ${(Number(note) / 100).toFixed(2)}`);
  });

  console.log('MOEDAS:');
  Object.entries(coins).forEach(([coin, quantity]) => {
    console.log(`${quantity} moeda(s) de R$ ${(Number(coin) / 100).toFixed(2)}`);
  });
}

const [time] = lines.map((item) => Number(item));

main(time);
