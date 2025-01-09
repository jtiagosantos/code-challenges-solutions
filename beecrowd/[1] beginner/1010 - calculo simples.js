`
Neste problema, deve-se ler o código de uma peça 1, o número de peças 1, o valor unitário de cada peça 1, o código de uma peça 2, o número de peças 2 e o valor unitário de cada peça 2. Após, calcule e mostre o valor a ser pago.

Entrada
O arquivo de entrada contém duas linhas de dados. Em cada linha haverá 3 valores, respectivamente dois inteiros e um valor com 2 casas decimais.

Saída
A saída deverá ser uma mensagem conforme o exemplo fornecido abaixo, lembrando de deixar um espaço após os dois pontos e um espaço após o "R$". O valor deverá ser apresentado com 2 casas após o ponto.
`

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function main({ part1, part2 }) {
  const amount = (part1.quantity * part1.unitValue) + (part2.quantity * part2.unitValue);
  console.log(`VALOR A PAGAR: R$ ${amount.toFixed(2)}`);
}

const [line1, line2] = lines;

const rawPart1 = line1.split(' ').map((item) => Number(item));
const rawPart2 = line2.split(' ').map((item) => Number(item));

const part1 = {
  quantity: rawPart1[1],
  unitValue: rawPart1[2],
};
const part2 = {
  quantity: rawPart2[1],
  unitValue: rawPart2[2],
};


main({
  part1: part1,
  part2: part2,
});
