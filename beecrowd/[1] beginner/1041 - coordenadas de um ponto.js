`
Leia 2 valores com uma casa decimal (x e y), que devem representar as coordenadas de um ponto em um plano. A seguir, determine qual o quadrante ao qual pertence o ponto, ou se está sobre um dos eixos cartesianos ou na origem (x = y = 0).

https://resources.beecrowd.com/gallery/images/problems/UOJ_1041.png

Se o ponto estiver na origem, escreva a mensagem “Origem”.

Se o ponto estiver sobre um dos eixos escreva “Eixo X” ou “Eixo Y”, conforme for a situação.

Entrada
A entrada contem as coordenadas de um ponto.

Saída
A saída deve apresentar o quadrante em que o ponto se encontra.
`

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function main({ x, y }) {
  if (x === 0 && y === 0) {
    console.log('Origem');
    return;
  }

  if (x === 0) {
    console.log('Eixo Y');
    return;
  }

  if (y === 0) {
    console.log('Eixo X');
    return;
  }

  const isQ1 = x > 0 && y > 0;
  const isQ2 = x < 0 && y > 0;
  const isQ3 = x < 0 && y < 0;
  const isQ4 = x > 0 && y < 0;

  if (isQ1) {
    console.log('Q1');
  } else if (isQ2) {
    console.log('Q2');
  } else if (isQ3) {
    console.log('Q3');
  } else if (isQ4) {
    console.log('Q4');
  }
}

const [x, y] = lines[0].split(' ').map((item) => Number(item));

main({
  x: x,
  y: y,
});
