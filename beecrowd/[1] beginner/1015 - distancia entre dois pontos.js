`
Leia os quatro valores correspondentes aos eixos x e y de dois pontos quaisquer no plano, p1(x1,y1) e p2(x2,y2) e calcule a distância entre eles, mostrando 4 casas decimais, segundo a fórmula:

https://resources.beecrowd.com/gallery/images/problems/UOJ_1015.png

Entrada
O arquivo de entrada contém duas linhas de dados. A primeira linha contém dois valores de ponto flutuante: x1 y1 e a segunda linha contém dois valores de ponto flutuante x2 y2.

Saída
Calcule e imprima o valor da distância segundo a fórmula fornecida, considerando 4 casas decimais.
`

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function main({ coordinate1, coordinate2 }) {
  const distance = Math.sqrt(
    Math.pow(coordinate2.x2 - coordinate1.x1, 2) 
    +
    Math.pow((coordinate2.y2 - coordinate1.y1), 2)
  );
  console.log(`${distance.toFixed(4)}`);
}

const [line1, line2] = lines;

const rawCoordinate1 = line1.split(' ').map((item) => Number(item));
const rawCoordinate2 = line2.split(' ').map((item) => Number(item));

const coordinate1 = {
  'x1': rawCoordinate1[0],
  'y1': rawCoordinate1[1],
};
const coordinate2 = {
  'x2': rawCoordinate2[0],
  'y2': rawCoordinate2[1],
};

main({
  coordinate1: coordinate1,
  coordinate2: coordinate2,
});
