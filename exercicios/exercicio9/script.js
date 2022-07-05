const data = new Date();
const formatoData = dataBrasil(data);
console.log(formatoData)

function dataBrasil(data) {
    const dia = zeroEsquerda(data.getDate());
    const mes = zeroEsquerda(data.getMonth());
    const ano = data.getFullYear();
    const hora = zeroEsquerda(data.getHours());
    const minutos = data.getMinutes();
    const segundos = data.getSeconds();
    const miliSegundos = Date.now();
    const diaSemana = zeroEsquerda(data.getDay());

    return `${dia}/${mes}/${ano}    ${hora}:${minutos}:${segundos}:${miliSegundos}  Dia da semana ${diaSemana}`;
}

function zeroEsquerda(num) {
    return num >=10 ? num : `0${num}`;
}

// new Date()
// new Date(value)
// new Date(dateString)
// new Date(dateObject)

// new Date(year, monthIndex)
// new Date(year, monthIndex, day)
// new Date(year, monthIndex, day, hours)
// new Date(year, monthIndex, day, hours, minutes)
// new Date(year, monthIndex, day, hours, minutes, seconds)
// new Date(year, monthIndex, day, hours, minutes, seconds, milliseconds)


// const data = new Date();
// console.log('Dia', data.getDate().toString());
// console.log('Mês', data.getMonth().toString());
// console.log('Ano', data.getFullYear().toString());
// console.log('Hora', data.getHours().toString());
// console.log('Minutos', data.getMinutes().toString());
// console.log('Segundos', data.getSeconds().toString());
// console.log('Milisegundos', data.getMilliseconds().toString());
// console.log('Quantidade exata de ms', Date.now().toString())
// console.log('Dia/Semana', data.getDay().toString());
