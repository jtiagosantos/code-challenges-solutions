`
A empresa ABC resolveu conceder um aumento de salários a seus funcionários de acordo com a tabela abaixo:

     Salário	      Percentual de Reajuste
    0 - 400.00             15%
 400.01 - 800.00           12%  
 800.01 - 1200.00          10%
 1200.01 - 2000.00         7%
 Acima de 2000.00          4%

Leia o salário do funcionário e calcule e mostre o novo salário, bem como o valor de reajuste ganho e o índice reajustado, em percentual.

Entrada
A entrada contém apenas um valor de ponto flutuante, com duas casas decimais.

Saída
Imprima 3 linhas na saída: o novo salário, o valor ganho de reajuste (ambos devem ser apresentados com 2 casas decimais) e o percentual de reajuste ganho, conforme exemplo abaixo.
`

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function main(salary) {
  let newSalary, difference, percentage;

  if (salary >= 0 && salary <= 400) {
    newSalary = salary + (salary * 0.15);
    difference = newSalary - salary;
    percentage = 15;
  } else if (salary > 400 & salary <= 800) {
    newSalary = salary + (salary * 0.12);
    difference = newSalary - salary;
    percentage = 12;
  } else if (salary > 800 & salary <= 1200) {
    newSalary = salary + (salary * 0.10);
    difference = newSalary - salary;
    percentage = 10;
  } else if (salary > 1200 & salary <= 2000) {
    newSalary = salary + (salary * 0.07);
    difference = newSalary - salary;
    percentage = 7;
  } else {
    newSalary = salary + (salary * 0.04);
    difference = newSalary - salary;
    percentage = 4;
  }

  console.log(`Novo salario: ${newSalary.toFixed(2)}`);
  console.log(`Reajuste ganho: ${difference.toFixed(2)}`);
  console.log(`Em percentual: ${percentage} %`);
}

const [salary] = lines.map((item) => Number(item));

main(salary);
