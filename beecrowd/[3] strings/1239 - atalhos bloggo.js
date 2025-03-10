`
Você está ajudando a desenvolver um sistema de gerenciamento de weblog chamado bloggo. Embora bloggo coloque todo o conteúdo direto no website em HTML, nem todos autores apreciam usar tags HTML em seus textos. Para tornar a vida deles mais fáceis, bloggo oferece uma sintaxe simples chamada atalhos para obter alguns efeitos textuais em HTML. Sua tarefa é, dado um documento escrito com atalhos, traduzi-lo para o HTML apropriado.


Um atalho é usado para colocar texto em itálico. HTML faz isto com as tags <i> e </i>, mas no bloggo um autor pode simplesmente colocar um pedaço de texto entre dois caracteres de sublinhado, '_'. Portanto, onde um autor escreve

  You _should_ see the baby elephant at the zoo!
                
bloggo vai publicar o seguinte:

  You <i>should</i> see the baby elephant at the zoo!
                
Outro atalho serve para colocar texto em negrito, o que, em HTML, é feito com as tags <b> e </b>. Bloggo permite aos autores fazer o mesmo com pares do caractere asterisco, '*'. Quando um autor escreve o texto

  Move it from *Receiving* to *Accounts Payable*.
                
ele vai sair no website assim:

  Move it from <b>Receiving</b> to <b>Accounts Payable</b>.
                
Entrada
A entrada contem vários casos de teste. Cada caso de teste é composto por uma linha que contem uma string texto, com zero ou mais usos dos atalhos itálico e negrito. Cada texto tem de 1 a 50 caracteres, inclusive. Os únicos caracteres permitidos no texto são os caracteres alfabéticos (de 'a' a 'z' e de 'A' a 'Z'), o sublinhado ('_'), o asterisco ('*'), o caractere de espaço e os símbolos de pontuação ',', ';', '.', '!', '?', '-', '(' e ')'. O caractere sublinhado '_' ocorre no texto um número par de vezes. O asterisco '*' também aparece um número par de vezes no texto. Nenhuma substring do texto entre um par de sublinhados ou entre um par de asteriscos pode conter outros sublinhados ou asteriscos, respectivamente.

Saída
Para cada linha de entrada seu programa deve gerar uma linha de saída com o texto traduzido para HTML como demonstrado nos exemplos abaixo. Para tornar itálico um pedaço de texto no HTML, você deve iniciar este pedaço com a tag <i> e terminá-lo com a tag </i>. Para texto em negrito, inicie com <b> e termine com </b>.

O final da entrada é determinado por EOF.
`

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.trim().split('\n');

const shortcuts = {
  '_': 0,
  '*': 0,
};

const openTags = {
  '_': '<i>',
  '*': '<b>',
};

const closeTags = {
  '_': '</i>',
  '*': '</b>',
};

function formatTextToHTML(text) {
  text = text.split('');

  for(let i=0; i<text.length; i++) {
    const char = text[i];
    
    if(char === '_' || char === '*') {
      if (shortcuts[char] % 2 === 0) {
        text[i] = openTags[char];
      } else {
        text[i] = closeTags[char];
      }
      shortcuts[char] += 1;
    }
  }

  text = text.join('');

  console.log(text);
}

for(let i=0; i<lines.length; i++) {
  const text = lines[i];
  formatTextToHTML(text);
}