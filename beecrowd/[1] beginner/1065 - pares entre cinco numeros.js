`
Faça um programa que leia 5 valores inteiros. Conte quantos destes valores digitados são pares e mostre esta informação.

Entrada
O arquivo de entrada contém 5 valores inteiros quaisquer.

Saída
Imprima a mensagem conforme o exemplo fornecido, indicando a quantidade de valores pares lidos.
`

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function main({ n1, n2, n3, n4, n5 }) {
  let count = 0;

  if (n1 % 2 === 0) count++;
  if (n2 % 2 === 0) count++;
  if (n3 % 2 === 0) count++;
  if (n4 % 2 === 0) count++;
  if (n5 % 2 === 0) count++;

  console.log(`${count} valores pares`);
}

const [n1, n2, n3, n4, n5] = lines.map((item) => Number(item));

main({
  n1: n1,
  n2: n2,
  n3: n3,
  n4: n4,
  n5: n5,
});