const form = document.querySelector('.form');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const inputPeso = document.querySelector('#weight');
    const inputAltura = document.querySelector('#height');
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);
    const imc = calculandoImc(peso, altura);
    const nivel = nivelImc(imc);
    const msg = `Seu Indice de massa corporal é ${imc} ${nivel}`;

    setResultados(msg, true);

    if (!peso) {
        setResultados('Peso invalido.', false);
    }
    if (!altura) {
        setResultados('Altura invalida.', false);
    }

});

function nivelImc(imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso',
        'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    if (imc >= 39.9) { return nivel[5]; }
    if (imc >= 35.9) { return nivel[4]; }
    if (imc >= 29.9) { return nivel[3]; }
    if (imc >= 24.9) { return nivel[2]; }
    if (imc >= 18.5) { return nivel[1]; }
    if (imc < 18.5) { return nivel[0]; }
}

function calculandoImc(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function criaP() {
    const p = document.createElement('p');
    return p;
}

function setResultados(msg, isValid) {
    const resultados = document.querySelector('.text');
    resultados.innerHTML = '';

    const p = criaP();
    p.innerHTML = msg;
    if (isValid) {
        p.classList.add('bg-green');
    }else {
        p.classList.add('bg-red');
    }
    resultados.appendChild(p);
}