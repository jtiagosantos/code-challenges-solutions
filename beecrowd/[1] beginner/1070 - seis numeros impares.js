`
Leia um valor inteiro X. Em seguida apresente os 6 valores ímpares consecutivos a partir de X, um valor por linha, inclusive o X ser for o caso.

Entrada
A entrada será um valor inteiro positivo.

Saída
A saída será uma sequência de seis números ímpares.
`

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function main(value) {
  let count = 1;

  while(count <= 6) {
    if (value % 2 !== 0) {
      console.log(value);
      count++;
    }
    value++;
  }
}

const [value] = lines.map((item) => Number(item));

main(value);
