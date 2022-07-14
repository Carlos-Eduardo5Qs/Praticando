const frutas = ['Maça', 'Banana', 'Laranja'];

frutas.push('Melão')
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

console.log('######');

for (let nome in frutas) {
    console.log(nome);
}

console.log('######');

for (let valor of frutas) {
    console.log(valor);
}