`
Paulinho tem em suas mãos um novo problema. Agora a sua professora lhe pediu que construísse um programa para verificar, à partir de dois valores muito grandes A e B, se B corresponde aos últimos dígitos de A.

Entrada
A entrada consiste de vários casos de teste. A primeira linha de entrada contém um inteiro N que indica a quantidade de casos de teste. Cada caso de teste consiste de dois valores A e B maiores que zero, cada um deles podendo ter até 1000 dígitos.

Saída
Para cada caso de entrada imprima uma mensagem indicando se o segundo valor encaixa no primeiro valor, confome exemplo abaixo.
`

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function checkStrings({ a, b }) {
  if (b.length > a.length) {
    console.log('nao encaixa');
    return;
  }

  if (a === b) {
    console.log('encaixa');
    return;
  }

  a = a.split('');
  b = b.split('');

  const index = b.length - 1;
  let checks = 0;

  for(let i=index; i>=0; i--) {
    if (b[i] === a.pop()) checks++;
  }

  if (checks === b.length) {
    console.log('encaixa');
  } else {
    console.log('nao encaixa');
  }
}

const aux = lines.shift();

for(let i=0; i<aux; i++) {
  const [a, b] = lines[i].split(' ');
  checkStrings({ a: a, b: b });
}
