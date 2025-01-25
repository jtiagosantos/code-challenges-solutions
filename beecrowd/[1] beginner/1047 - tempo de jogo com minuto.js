`
Leia a hora inicial, minuto inicial, hora final e minuto final de um jogo. A seguir calcule a duração do jogo.

Obs: O jogo tem duração mínima de um (1) minuto e duração máxima de 24 horas.

Entrada
Quatro números inteiros representando a hora de início e fim do jogo.

Saída
Mostre a seguinte mensagem: “O JOGO DUROU XXX HORA(S) E YYY MINUTO(S)” .
`

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function main({ initialHour, initialMinute, endHour, endMinute }) {
  if (initialHour === endHour && initialMinute === endMinute) {
    console.log('O JOGO DUROU 24 HORA(S) E 0 MINUTO(S)');
    return;
  }

  if (initialHour === endHour && initialMinute !== endMinute) {
    let difference;

    if (initialMinute > endMinute) {
      difference = 60 - (initialMinute - endMinute);
      console.log(`O JOGO DUROU 23 HORA(S) E ${difference} MINUTO(S)`);
    } else {
      difference = endMinute - initialMinute;
      console.log(`O JOGO DUROU 0 HORA(S) E ${difference} MINUTO(S)`);
    }
    return;
  }

  let differenceHours = 0;

  while(initialHour !== endHour) {
    differenceHours++;
    initialHour++;

    if (initialHour === 24) {
      initialHour = 0;
    }
  }

  differenceHours *= 60;

  const differenceMinutes = endMinute - initialMinute;
  const totalMinutes = differenceHours + differenceMinutes;

  if (totalMinutes < 60) {
    console.log(`O JOGO DUROU 0 HORA(S) E ${totalMinutes} MINUTO(S)`);
    return;
  }

  const hours = Math.trunc(totalMinutes / 60);
  const minutes = totalMinutes - (hours * 60);

  console.log(`O JOGO DUROU ${hours} HORA(S) E ${minutes} MINUTO(S)`);
}

const [initialHour, initialMinute, endHour, endMinute] = lines[0].split(' ').map((item) => Number(item));

main({
  initialHour: initialHour,
  initialMinute: initialMinute,
  endHour: endHour,
  endMinute: endMinute,
});
