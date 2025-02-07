`
Faça um programa que leia 6 valores. Estes valores serão somente negativos ou positivos (desconsidere os valores nulos). A seguir, mostre a quantidade de valores positivos digitados.

Entrada
Seis valores, negativos e/ou positivos.

Saída
Imprima uma mensagem dizendo quantos valores positivos foram lidos.
`

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function main({ n1, n2, n3, n4, n5, n6 }) {
  let count = 0;

  if (n1 > 0) count++;
  if (n2 > 0) count++;
  if (n3 > 0) count++;
  if (n4 > 0) count++;
  if (n5 > 0) count++;
  if (n6 > 0) count++;

  console.log(`${count} valores positivos`);
}

const [n1, n2, n3, n4, n5, n6] = lines.map((item) => Number(item));

main({
  n1: n1,
  n2: n2,
  n3: n3,
  n4: n4,
  n5: n5,
  n6: n6,
});