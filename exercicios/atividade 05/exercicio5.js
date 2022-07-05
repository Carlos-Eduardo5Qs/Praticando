let number = Number(prompt('Digite um número:'));
const numberTitle = document.getElementById('number-title');
const textBody = document.getElementById('text-number');

numberTitle.innerHTML = number;

textBody.innerHTML = ('');
textBody.innerHTML += (`<p>A raiz quadrada de ${number} é ${number ** 0.5}</p>`);
textBody.innerHTML += (`<p>É um NaN? ${Number.isNaN(number)}</p>`)
textBody.innerHTML += (`<p>O número ${number} é inteiro ? ${Number.isInteger(number)}</p>`);
textBody.innerHTML += (`<p>Arredondado para baixo: ${Math.floor(number)}</p>`);
textBody.innerHTML += (`<p>Arredondado para cima: ${Math.ceil(number)}</p>`);
textBody.innerHTML += (`<p>Com duas casa decimais: ${number.toFixed(2)}</p>`);

