`
Leia 3 valores reais (A, B e C) e verifique se eles formam ou não um triângulo. Em caso positivo, calcule o perímetro do triângulo e apresente a mensagem:

Perimetro = XX.X

Em caso negativo, calcule a área do trapézio que tem A e B como base e C como altura, mostrando a mensagem

Area = XX.X

Entrada
A entrada contém três valores reais.

Saída
O resultado deve ser apresentado com uma casa decimal.
`

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function checkIsTriangle({ a, b, c }) {
  return (a + b) > c && (b + c) > a && (a + c) > b;
}

function main({ a, b, c }) {
  const isTriangle = checkIsTriangle({ a: a, b: b, c: c });

  if (!isTriangle) {
    const area = ((a + b) * c) / 2;
    console.log(`Area = ${area.toFixed(1)}`);
    return;
  }

  const perimeter = a + b + c;
  console.log(`Perimetro = ${perimeter.toFixed(1)}`);
}

const [a, b, c] = lines[0].split(' ').map((item) => Number(item));

main({
  a: a,
  b: b,
  c: c,
});
