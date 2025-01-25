`
Leia 3 valores inteiros e ordene-os em ordem crescente. No final, mostre os valores em ordem crescente, uma linha em branco e em seguida, os valores na sequência como foram lidos.

Entrada
A entrada contem três números inteiros.

Saída
Imprima a saída conforme foi especificado.
`

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function main({ a, b, c }) {
  const array = [a, b, c];
  const sorted = [...array].sort((a, b) => a - b);

  sorted.forEach((value) => console.log(value));
  console.log('');
  array.forEach((value) => console.log(value));
}

const [a, b, c] = lines[0].split(' ').map((item) => Number(item));

main({
  a: a,
  b: b,
  c: c,
});
