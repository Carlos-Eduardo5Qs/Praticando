// IEEE 754-2008

let num1 = 0.7; //Number
let num2 = 0.1; //Number

//num1 += num2; //0.8
//num1 += num2; //0.9
//num1 += num2; //1.0

/*Deste modo abaixo que provável que polua o nosso código se tivermos um job muito grande*/

// num1 = ((num1 * 100) + (num2 * 100)) / 100;     // 0.8
// num1 = ((num1 * 100) + (num2 * 100)) / 100;     // 0.9
// num1 = ((num1 * 100) + (num2 * 100)) / 100;     // 1.0
// num1 = ((num1 * 100) + (num2 * 100)) / 100;     // 1.1
// num1 = ((num1 * 100) + (num2 * 100)) / 100;     // 1.2
// num1 = ((num1 * 100) + (num2 * 100)) / 100;     // 1.3
// num1 = ((num1 * 100) + (num2 * 100)) / 100;     // 1.4
// num1 = ((num1 * 100) + (num2 * 100)) / 100;     // 1.5
// num1 = ((num1 * 100) + (num2 * 100)) / 100;     // 1.6
// num1 = ((num1 * 100) + (num2 * 100)) / 100;     // 1.7
// num1 = ((num1 * 100) + (num2 * 100)) / 100;     // 1.8
// num1 = ((num1 * 100) + (num2 * 100)) / 100;     // 1.9
// num1 = ((num1 * 100) + (num2 * 100)) / 100;     // 2.0

/*!! OU DESTE MODO QUE PARECE SER BEM MAIS FÁCIL DE RESOLVER ESTE PROBLEMA!! */

num1 += num2;
num1 += num2;
num1 += num2;
num1 += num2;
num1 += num2;
num1 += num2;
num1 += num2;
num1 += num2;
num1 += num2;
num1 += num2;
num1 += num2;
num1 += num2;
num1 += num2;

num1 = Number(num1.toFixed(2));

console.log(num1);
console.log(Number.isInteger(num1));



// Aqui temos algumas tags do Javascrip

//console.log(num1.toString() + num2);
//console.log(Number.isInteger(num1));
//console.log(Number.isNaN(num1 * num2));
//console.log(num1.toFixed(2));


