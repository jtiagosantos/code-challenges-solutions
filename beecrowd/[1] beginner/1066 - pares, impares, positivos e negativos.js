`
Leia 5 valores Inteiros. A seguir mostre quantos valores digitados foram pares, quantos valores digitados foram ímpares, quantos valores digitados foram positivos e quantos valores digitados foram negativos.

Entrada
O arquivo de entrada contém 5 valores inteiros quaisquer.

Saída
Imprima a mensagem conforme o exemplo fornecido, uma mensagem por linha, não esquecendo o final de linha após cada uma.
`

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function main({ n1, n2, n3, n4, n5 }) {
  let even = 0;
  let odd = 0;
  let positive = 0;
  let negative = 0;

  [n1, n2, n3, n4, n5].forEach((number) => {
    if (number % 2 === 0) even++;
    if (number % 2 !== 0) odd++;
    if (number > 0) positive++;
    if (number < 0) negative++
  });

  console.log(`${even} valor(es) par(es)`);
  console.log(`${odd} valor(es) impar(es)`);
  console.log(`${positive} valor(es) positivo(s)`);
  console.log(`${negative} valor(es) negativo(s)`);
}

const [n1, n2, n3, n4, n5] = lines.map((item) => Number(item));

main({
  n1: n1,
  n2: n2,
  n3: n3,
  n4: n4,
  n5: n5,
});