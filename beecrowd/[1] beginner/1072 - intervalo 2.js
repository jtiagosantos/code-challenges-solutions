`
Leia um valor inteiro N. Este valor será a quantidade de valores inteiros X que serão lidos em seguida.
Mostre quantos destes valores X estão dentro do intervalo [10,20] e quantos estão fora do intervalo, mostrando essas informações.

Entrada
A primeira linha da entrada contém um valor inteiro N (N < 10000), que indica o número de casos de teste.
Cada caso de teste a seguir é um valor inteiro X (-107 < X <107).
 

Saída
Para cada caso, imprima quantos números estão dentro (in) e quantos valores estão fora (out) do intervalo.
`

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function main(array) {
  let _in = 0;
  let _out = -1;

  for(let i=0; i<array.length; i++) {
    const n = array[i];
    if (n >= 10 && n <= 20) _in++
    if (n < 10 || n > 20) _out++;
  }

  console.log(`${_in} in`);
  console.log(`${_out} out`);
}

const _input = lines.map((item) => Number(item));

_input.shift();

main(_input);
