`
Neste problema, você deverá ler 3 palavras que definem o tipo de animal possível segundo o esquema abaixo, da esquerda para a direita.  Em seguida conclua qual dos animais seguintes foi escolhido, através das três palavras fornecidas.

https://resources.beecrowd.com/gallery/images/problems/UOJ_1049_b.png

Entrada
A entrada contém 3 palavras, uma em cada linha, necessárias para identificar o animal segundo a figura acima, com todas as letras minúsculas.

Saída
Imprima o nome do animal correspondente à entrada fornecida.
`

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function main({ category1, category2, category3 }) {
  const tree = {
    'vertebrado': {
      'ave': {
        'carnivoro': 'aguia',
        'onivoro': 'pomba'
      },
      'mamifero': {
        'onivoro': 'homem',
        'herbivoro': 'vaca',
      },
    },
    'invertebrado': {
      'inseto': {
        'hematofago': 'pulga',
        'herbivoro': 'lagarta',
      },
      'anelideo': {
        'hematofago': 'sanguessuga',
        'onivoro': 'minhoca',
      },
    },
  };

  console.log(tree[category1][category2][category3]);
}

const [category1, category2, category3] = lines;

main({
  category1: category1,
  category2: category2,
  category3: category3,
});