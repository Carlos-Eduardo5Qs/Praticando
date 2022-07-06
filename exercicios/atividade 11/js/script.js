// const paragrafo = document.querySelector('.linha');
// const data = new Date();
// const diaDaSemana = diaSemana(data)
// const dia = day(data);
// const mes = month(data);
// const ano = data.getFullYear();
// const hora = data.getHours();
// const minutos = data.getMinutes();
// const segundos = data.getSeconds();


// function diaSemana(data) {
//     let semana = data.getDay();

//     if (semana === 0) {
//         semana = 'Domingo';
//     } else if (semana === 1) {
//         semana = 'Segunda-Feira';
//     } else if (semana === 2) {
//         semana = 'Terça-Feira';
//     } else if (semana === 3) {
//         semana = 'Quarta-Feira';
//     } else if (semana === 4) {
//         semana = 'Quinta-Feira';
//     } else if (semana === 5) {
//         semana = 'Sexta-Feira';
//     } else if (semana === 6) {
//         semana = 'Sábado';
//     } else {
//         semana = '';
//     }

//     return semana;
// }

// function day(data) {
//     const dia = zeroEsquerda(data.getDate());

//     function zeroEsquerda(num) {
//         return num >= 10 ? num : `0${num}`;
//     }

//     return dia;
// }

// function month(data) {
//     let mes = data.getMonth();

// //Logo abaixo testarei Switch/case pela primeira vez :)
//     switch (mes) {
//         case 0:
//             mes = 'Janeiro';
//             break;
//         case 1:
//             mes = 'Fevereiro';
//             break;
//         case 2:
//             mes = 'Março';
//             break;
//         case 3:
//             mes = 'Abril';
//             break;
//         case 4:
//             mes = 'Maio';
//             break;
//         case 5:
//             mes = 'Junho';
//             break
//         case 6:
//             mes = 'Julho';
//             break;
//         case 7:
//             mes = 'Agosto';
//             break;
//         case 8:
//             mes = 'Setembro';
//             break;
//         case 9:
//             mes = 'Outubro';
//             break;
//         case 10:
//             mes = 'Novembro';
//             break;
//         case 11:
//             mes = 'Dezembro';
//             break;
//     }

//     return mes;
// }

// paragrafo.innerHTML = `${diaDaSemana}, ${dia} de ${mes} de ${ano} exatamente às ${hora} horas, ${minutos} minutos e ${segundos} segundos.`;

const p = document.querySelector('.container p');
const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour:'numeric',
    minute:'numeric',
    second:'numeric',
};

p.innerHTML = new Date().toLocaleDateString('pt-BR', options);


