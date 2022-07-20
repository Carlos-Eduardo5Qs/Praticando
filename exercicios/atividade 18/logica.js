//Exercico 1 da atividade de lógica

const x = Math.floor(Math.random() * (30 - 1) + 1);
const y = Math.floor(Math.random() * (30 - 1) + 1);

function compMaior(x, y) {
    return console.log(x,y), x > y ? `${x} Valor 'X' maior que Y` : `${y} Valor 'y' maior que X`;
}
console.log(compMaior(x, y));
