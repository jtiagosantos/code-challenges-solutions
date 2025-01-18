`
Leia 3 valores de ponto flutuante e efetue o cálculo das raízes da equação de Bhaskara. Se não for possível calcular as raízes, mostre a mensagem correspondente “Impossivel calcular”, caso haja uma divisão por 0 ou raiz de numero negativo.

Entrada
Leia três valores de ponto flutuante (double) A, B e C.

Saída
Se não houver possibilidade de calcular as raízes, apresente a mensagem "Impossivel calcular". Caso contrário, imprima o resultado das raízes com 5 dígitos após o ponto, com uma mensagem correspondente conforme exemplo abaixo. Imprima sempre o final de linha após cada mensagem.
`

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function main({ a, b, c }) {
  if (a === 0) {
    console.log('Impossivel calcular');
    return;
  }

  const delta = Math.pow(b, 2) - (4 * a * c);

  if (delta < 0) {
    console.log('Impossivel calcular');
    return;
  }

  if (delta === 0) {
    const x = -b / (2 * a);
    console.log(`R1 = ${x.toFixed(5)}`);
    console.log(`R2 = ${x.toFixed(5)}`);
    return;
  }

  const x1 = (-b + Math.sqrt(delta)) / (2 * a);
  const x2 = (-b - Math.sqrt(delta)) / (2 * a);

  console.log(`R1 = ${x1.toFixed(5)}`);
  console.log(`R2 = ${x2.toFixed(5)}`);
}

const [a, b, c] = lines[0].split(' ').map((item) => Number(item));

main({
  a: a,
  b: b,
  c: c,
});
