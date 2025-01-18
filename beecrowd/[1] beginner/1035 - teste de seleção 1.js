`
Leia 4 valores inteiros A, B, C e D. A seguir, se B for maior do que C e se D for maior do que A, e a soma de C com D for maior que a soma de A e B e se C e D, ambos, forem positivos e se a variável A for par escrever a mensagem "Valores aceitos", senão escrever "Valores nao aceitos".

Entrada
Quatro números inteiros A, B, C e D.

Saída
Mostre a respectiva mensagem após a validação dos valores.
`

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function main({ a, b, c, d }) {
  const condition1 = b > c;
  const condition2 = d > a;
  const condition3 = c + d > a + b;
  const condition4 = c > 0 && d > 0;
  const condition5 = a % 2 === 0;

  const allConditions = [
    condition1, 
    condition2, 
    condition3, 
    condition4, 
    condition5
  ]
  const areConditionsValid = allConditions.every((condition) => condition);

  if (areConditionsValid) {
    console.log('Valores aceitos');
  } else {
    console.log('Valores nao aceitos');
  }
}

const [a, b, c, d] = lines[0].split(' ').map((item) => Number(item));

main({
  a: a,
  b: b,
  c: c,
  d: d,
});
