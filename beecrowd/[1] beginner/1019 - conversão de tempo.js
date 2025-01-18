`
Leia um valor inteiro, que é o tempo de duração em segundos de um determinado evento em uma fábrica, e informe-o expresso no formato horas:minutos:segundos.

Entrada
O arquivo de entrada contém um valor inteiro N.

Saída
Imprima o tempo lido no arquivo de entrada (segundos), convertido para horas:minutos:segundos, conforme exemplo fornecido.
`

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const ONE_HOUR_IN_SECONDS = 3600;
const ONE_MINUTE_IN_SECONDS = 60;

function main(time) {
  let hour = 0;
  let minute = 0;
  let second = 0;

  while (time > 0) {
    if (time >= ONE_HOUR_IN_SECONDS) {
      hour++;
      time -= ONE_HOUR_IN_SECONDS;
    } else if (time >= ONE_MINUTE_IN_SECONDS) {
      minute++;
      time -= ONE_MINUTE_IN_SECONDS;
    } else {
      second = time;
      time = 0;
    }
  }

  console.log(`${hour}:${minute}:${second}`);
}

const [time] = lines.map((item) => Number(item));

main(time);