`
Escreva um programa que leia três valores com ponto flutuante de dupla precisão: A, B e C. Em seguida, calcule e mostre:
a) a área do triângulo retângulo que tem A por base e C por altura.
b) a área do círculo de raio C. (pi = 3.14159)
c) a área do trapézio que tem A e B por bases e C por altura.
d) a área do quadrado que tem lado B.
e) a área do retângulo que tem lados A e B.

Entrada
O arquivo de entrada contém três valores com um dígito após o ponto decimal.

Saída
O arquivo de saída deverá conter 5 linhas de dados. Cada linha corresponde a uma das áreas descritas acima, sempre com mensagem correspondente e um espaço entre os dois pontos e o valor. O valor calculado deve ser apresentado com 3 dígitos após o ponto decimal.
`

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const PI = 3.14159;

function main({ a, b, c }) {
  const areaOfRightTriangle = calculateAreaOfRightTriangle({ base: a, height: c });
  const areaOfCircle = calculateAreaOfCircle(c);
  const areaOfTrapeze = calculateAreaOfTrapeze({ baseA: a, baseB: b, height: c });
  const areaOfSquare = calculateAreaOfSquare(b);
  const areaOfRectangle = calculateAreaOfRectangle({ width: a, height: b });

  console.log(`TRIANGULO: ${areaOfRightTriangle.toFixed(3)}`);
  console.log(`CIRCULO: ${areaOfCircle.toFixed(3)}`);
  console.log(`TRAPEZIO: ${areaOfTrapeze.toFixed(3)}`);
  console.log(`QUADRADO: ${areaOfSquare.toFixed(3)}`);
  console.log(`RETANGULO: ${areaOfRectangle.toFixed(3)}`);
}

function calculateAreaOfRightTriangle({ base, height }) {
  return (base * height) / 2;
}

function calculateAreaOfCircle(radius) {
  return PI * (Math.pow(radius, 2));
}

function calculateAreaOfTrapeze({ baseA, baseB, height }) {
  return ((baseA + baseB) * height ) / 2;
}

function calculateAreaOfSquare(side) {
  return Math.pow(side, 2);
}

function calculateAreaOfRectangle({ width, height }) {
  return width * height;
}

const [line] = lines;
const [a, b, c] = line.split(' ').map((item) => Number(item));

main({
  a: a,
  b: b,
  c: c,
});
