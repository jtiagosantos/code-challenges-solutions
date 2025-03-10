`
Implemente um programa denominado combinador, que recebe duas strings e deve combiná-las, alternando as letras de cada string, começando com a primeira letra da primeira string, seguido pela primeira letra da segunda string, em seguida pela segunda letra da primeira string, e assim sucessivamente. As letras restantes da cadeia mais longa devem ser adicionadas ao fim da string resultante e retornada.

Entrada
A entrada contém vários casos de teste. A primeira linha contém um inteiro N que indica a quantidade de casos de teste que vem a seguir. Cada caso de teste é composto por uma linha que contém duas cadeias de caracteres, cada cadeia de caracteres contém entre 1 e 50 caracteres inclusive.

Saída
Combine as duas cadeias de caracteres da entrada como mostrado no exemplo abaixo e exiba a cadeia resultante.
`

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function combineStrings({ a, b }) {
  a = a.split('');
  b = b.split('');

  let limit = a.length - 1;
  if (b.length > limit) limit = b.length - 1;

  const output = [];

  while(limit >= 0) {
    output.push(a.shift(), b.shift());
    limit--;
  }

  if (a.length > 0) output.push(...a);
  if (b.length > 0) output.push(...b);

  console.log(output.join(''));
}

const limit = lines.shift();

for(let i=0; i<limit; i++) {
  const [a, b] = lines[i].split(' ');
  combineStrings({ a: a, b: b });
}
