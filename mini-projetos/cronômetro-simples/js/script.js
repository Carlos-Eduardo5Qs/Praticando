const data = document.querySelector('.data');
const hora = document.querySelector('.hora');
const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('#iniciar');
const pausar = document.querySelector('#pausar');
const zerar = document.querySelector('#zerar');
let segundos = 0;
let timer;

function dataAtual() {
    const data = new Date();

    return data.toLocaleDateString('pt-BR');
}

function horaAtual() {
    const data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

setInterval(function () {
    data.innerHTML = dataAtual();
    hora.innerHTML = horaAtual();
});

iniciar.addEventListener('click', function () {
    clearTimeout(timer);
    relogio.classList.remove('active');

    function formatoHora(segundos) {
        const hora = new Date(segundos * 1000);

        return hora.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'
        });
    }

    timer = setInterval(function () {
        segundos++;
        relogio.innerHTML = formatoHora(segundos);
    }, 1000);

});

pausar.addEventListener('click', function () {
    clearTimeout(timer);

    relogio.classList.add('active');
});

zerar.addEventListener('click', function () {
    clearTimeout(timer);
    relogio.classList.remove('active');
    relogio.innerHTML = '00:00:00';
    segundos = 0;
});

