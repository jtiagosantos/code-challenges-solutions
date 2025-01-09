`
Leia um valor inteiro. A seguir, calcule o menor número de notas possíveis (cédulas) no qual o valor pode ser decomposto. As notas consideradas são de 100, 50, 20, 10, 5, 2 e 1. A seguir mostre o valor lido e a relação de notas necessárias.

Entrada
O arquivo de entrada contém um valor inteiro N (0 < N < 1000000).

Saída
Imprima o valor lido e, em seguida, a quantidade mínima de notas de cada tipo necessárias, conforme o exemplo fornecido. Não esqueça de imprimir o fim de linha após cada linha, caso contrário seu programa apresentará a mensagem: “Presentation Error”.
`

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function main(amount) {
  const moneyNotes = {
    100: 0,
    50: 0,
    20: 0,
    10: 0,
    5: 0,
    2: 0,
    1: 0,
  };
  let value = amount;

  if (value >= 100) {
    moneyNotes[100] = Math.trunc(value / 100);
    value -= moneyNotes[100] * 100;
  } 
  if (value >= 50) {
    moneyNotes[50] = Math.trunc(value / 50);
    value -= moneyNotes[50] * 50;
  }
  if (value >= 20) {
    moneyNotes[20] = Math.trunc(value / 20);
    value -= moneyNotes[20] * 20;
  }
  if (value >= 10) {
    moneyNotes[10] = Math.trunc(value / 10);
    value -= moneyNotes[10] * 10;
  }
  if (value >= 5) {
    moneyNotes[5] = Math.trunc(value / 5);
    value -= moneyNotes[5] * 5;
  } 
  if (value >= 2) {
    moneyNotes[2] = Math.trunc(value / 2);
    value -= moneyNotes[2] * 2;
  }
  moneyNotes[1] = value;

  console.log(amount);

  Object.entries(moneyNotes).reverse().forEach(([note, quantity]) => {
    console.log(`${quantity} nota(s) de R$ ${note},00`);
  });
}

const [amount] = lines.map((item) => Number(item));

main(amount);
