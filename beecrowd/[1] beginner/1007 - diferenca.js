`
Leia quatro valores inteiros A, B, C e D. A seguir, calcule e mostre a diferença do produto de A e B pelo produto de C e D segundo a fórmula: DIFERENCA = (A * B - C * D).

Entrada
O arquivo de entrada contém 4 valores inteiros.

Saída
Imprima a mensagem DIFERENCA com todas as letras maiúsculas, conforme exemplo abaixo, com um espaço em branco antes e depois da igualdade.
`

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function main({ a, b, c, d }) {
  const difference = (a * b) - (c * d);
  console.log(`DIFERENCA = ${difference}`);
}

const [a, b, c, d] = lines.map((item) => Number(item));

main({
  a: a,
  b: b,
  c: c,
  d: d,
});
