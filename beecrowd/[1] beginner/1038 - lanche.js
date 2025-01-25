`
Com base na tabela abaixo, escreva um programa que leia o código de um item e a quantidade deste item. A seguir, calcule e mostre o valor da conta a pagar.

https://resources.beecrowd.com/gallery/images/problems/UOJ_1038_pt.png

Entrada
O arquivo de entrada contém dois valores inteiros correspondentes ao código e à quantidade de um item conforme tabela acima.

Saída
O arquivo de saída deve conter a mensagem "Total: R$ " seguido pelo valor a ser pago, com 2 casas após o ponto decimal.
`

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function main({ code, quantity }) {
  const menu = {
    1: 4,
    2: 4.5,
    3: 5,
    4: 2,
    5: 1.5,
  }

  const total = menu[code] * quantity;

  console.log(`Total: R$ ${total.toFixed(2)}`);
}

const [code, quantity] = lines[0].split(' ').map((item) => Number(item));

main({
  code: code,
  quantity: quantity,
});
