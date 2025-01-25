`
Leia 2 valores inteiros (A e B). Após, o programa deve mostrar uma mensagem "Sao Multiplos" ou "Nao sao Multiplos", indicando se os valores lidos são múltiplos entre si.

Entrada
A entrada contém valores inteiros.

Saída
A saída deve conter uma das mensagens conforme descrito acima.
`

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function main({ a, b }) {
  if (b > a) [a, b] = [b, a];

  if (a % b === 0) {
    console.log('Sao Multiplos');
  } else {
    console.log('Nao sao Multiplos');
  }
}

const [a, b] = lines[0].split(' ').map((item) => Number(item));

main({
  a: a,
  b: b,
});
