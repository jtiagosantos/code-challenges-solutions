`
Leia 2 valores inteiros X e Y. A seguir, calcule e mostre a soma dos números impares entre eles.

Entrada
O arquivo de entrada contém dois valores inteiros.

Saída
O programa deve imprimir um valor inteiro. Este valor é a soma dos valores ímpares que estão entre os valores fornecidos na entrada que deverá caber em um inteiro.
`

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function main({ x, y }) {
  if (x > y) [x, y] = [y, x];
  
  let sum = 0;

  while(x < y - 1) {
    if ((x + 1) % 2 !== 0) {
      sum += x + 1;
    }
    x++;
  }

  console.log(sum);
}

const [x, y] = lines.map((item) => Number(item));

main({
  x: x,
  y: y,
});
