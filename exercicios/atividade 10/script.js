const data = new Date();
const dataBrasil = formatoData(data);
const horas = horaBrasil(data);
const dia = diaDaSemana(data);

function formatoData(data) {
    const dia = zeroEsquerda(data.getDate());
    const mes = zeroEsquerda(data.getMonth());
    const ano = zeroEsquerda(data.getFullYear());

    return `Data de hoje (${dia}/${mes}/${ano})`;
}

function horaBrasil(data) {
    const hora = zeroEsquerda(data.getHours());
    const minutos = data.getMinutes();
    const segundos = data.getSeconds();

    return `São exatamente (${hora} horas, ${minutos} minutos e ${segundos} segundos)`;
}

function diaDaSemana(data) {
    let semana = data.getDay();

    if (semana === 0) {
        semana = 'Domingo';
    } else if (semana === 1) {
        semana = 'Segunda-Feira';
    } else if (semana === 2) {
        semana = 'Terça-Feira';
    } else if (semana === 3) {
        semana = 'Quarta-Feira';
    } else if (semana === 4) {
        semana = 'Quinta-Feira';
    } else if (semana === 5) {
        semana = 'Sexta-Feira';
    } else if (semana === 6) {
        semana = 'Sábado';
    }

    return semana;
}

function zeroEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}

console.log(dataBrasil);
console.log(horas);
console.log(dia);