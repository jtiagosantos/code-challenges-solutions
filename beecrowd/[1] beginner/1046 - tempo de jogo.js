`
Leia a hora inicial e a hora final de um jogo. A seguir calcule a duração do jogo, sabendo que o mesmo pode começar em um dia e terminar em outro, tendo uma duração mínima de 1 hora e máxima de 24 horas.

Entrada
A entrada contém dois valores inteiros representando a hora de início e a hora de fim do jogo.

Saída
Apresente a duração do jogo conforme exemplo abaixo.
`

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function main({ startTime, endTime }) {
  if (startTime === endTime) {
    console.log('O JOGO DUROU 24 HORA(S)');
    return;
  }

  let duration = 0;

  while(startTime !== endTime) {
    duration++;
    startTime++;

    if (startTime === 24) {
      startTime = 0;
    }
  }

  console.log(`O JOGO DUROU ${duration} HORA(S)`);
}

const [startTime, endTime] = lines[0].split(' ').map((item) => Number(item));

main({
  startTime: startTime,
  endTime: endTime,
});
