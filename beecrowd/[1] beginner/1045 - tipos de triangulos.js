`
Leia 3 valores de ponto flutuante A, B e C e ordene-os em ordem decrescente, de modo que o lado A representa o maior dos 3 lados. A seguir, determine o tipo de triângulo que estes três lados formam, com base nos seguintes casos, sempre escrevendo uma mensagem adequada:

se A ≥ B+C, apresente a mensagem: NAO FORMA TRIANGULO
se A2 = B2 + C2, apresente a mensagem: TRIANGULO RETANGULO
se A2 > B2 + C2, apresente a mensagem: TRIANGULO OBTUSANGULO
se A2 < B2 + C2, apresente a mensagem: TRIANGULO ACUTANGULO
se os três lados forem iguais, apresente a mensagem: TRIANGULO EQUILATERO
se apenas dois dos lados forem iguais, apresente a mensagem: TRIANGULO ISOSCELES
Entrada
A entrada contem três valores de ponto flutuante de dupla precisão A (0 < A) , B (0 < B) e C (0 < C).

Saída
Imprima todas as classificações do triângulo especificado na entrada.
`

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function main({ a: _a, b: _b, c: _c }) {
  const [a, b, c] = [_a, _b, _c].sort((a, b) => b - a);

  if (a >= b + c) {
    console.log('NAO FORMA TRIANGULO');
    return;
  }

  if (Math.pow(a, 2) === Math.pow(b, 2) + Math.pow(c, 2)) {
    console.log('TRIANGULO RETANGULO');
  }

  if (Math.pow(a, 2) > Math.pow(b, 2) + Math.pow(c, 2)) {
    console.log('TRIANGULO OBTUSANGULO');
  }

  if (Math.pow(a, 2) < Math.pow(b, 2) + Math.pow(c, 2)) {
    console.log('TRIANGULO ACUTANGULO');
  }

  if (a === b && b === c) {
    console.log('TRIANGULO EQUILATERO');
  }

  if (
    (a === b && a !== c && b !== c) ||
    (b === c && b !== a && c !== a) ||
    (c === a && c !== b && a !== b)
  ) {
    console.log('TRIANGULO ISOSCELES');
  }
}

const [a, b, c] = lines[0].split(' ').map((item) => Number(item));

main({
  a: a,
  b: b,
  c: c,
});
