`
Leia 6 valores. Em seguida, mostre quantos destes valores digitados foram positivos. Na próxima linha, deve-se mostrar a média de todos os valores positivos digitados, com um dígito após o ponto decimal.

Entrada
A entrada contém 6 números que podem ser valores inteiros ou de ponto flutuante. Pelo menos um destes números será positivo.

Saída
O primeiro valor de saída é a quantidade de valores positivos. A próxima linha deve mostrar a média dos valores positivos digitados.
`

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function main({ n1, n2, n3, n4, n5, n6 }) {
  let count = 0;
  let sum = 0;

  if (n1 > 0) {
    count++; 
    sum += n1;
  }
  if (n2 > 0) {
    count++; 
    sum += n2;
  }
  if (n3 > 0) {
    count++; 
    sum += n3;
  }
  if (n4 > 0) {
    count++; 
    sum += n4;
  }
  if (n5 > 0) {
    count++; 
    sum += n5;
  }
  if (n6 > 0) {
    count++; 
    sum += n6;
  }

  const average = sum / count;

  console.log(`${count} valores positivos`);
  console.log(average.toFixed(1));
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