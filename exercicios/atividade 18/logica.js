//Exercico 1 da atividade de lógica

const x = Math.floor(Math.random() * (30 - 1) + 1);
const y = Math.floor(Math.random() * (30 - 1) + 1);

function compMaior(x, y) {
    return x > y ? `${x} Valor 'x'` : `${y} Valor y`;
}
console.log(compMaior(x, y));
