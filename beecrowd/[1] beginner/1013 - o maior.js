`
Faça um programa que leia três valores e apresente o maior dos três valores lidos seguido da mensagem “eh o maior”. Utilize a fórmula:

https://resources.beecrowd.com/gallery/images/problems/UOJ_1013.png

Obs.: a fórmula apenas calcula o maior entre os dois primeiros (a e b). Um segundo passo, portanto é necessário para chegar no resultado esperado.

Entrada
O arquivo de entrada contém três valores inteiros.

Saída
Imprima o maior dos três valores seguido por um espaço e a mensagem "eh o maior".
`

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function main({ a, b, c }) {
  let greater = a;

  if (b > greater) {
    greater = b;
  }
  if (c > greater) {
    greater = c;
  }

  console.log(`${greater} eh o maior`);
}

const [line] = lines;
const [a, b, c] = line.split(' ').map((item) => Number(item));

main({
  a: a,
  b: b,
  c: c,
});
