//                Atribuição via desestruturação com arrays...

//             0  1  2  3  4  5  6  7  8
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [zero, , dois, , quatro, , seis, ...rest] = array

// console.log(zero, dois, quatro, seis);
// console.log(rest);

//                           0                1
//                      0    1    2      0    1    2
const segundoArray = [[100, 200, 300], [400, 500, 600]];
const [lista1, lista2] = segundoArray

// console.log(lista1, lista2);
// console.log(lista2[0], lista1[1]);

let a = 'A';
let b = 'B';
let c = 'C';

const numero = [1, 2, 3];
[a, b, c] = numero;

console.log(numero);

//      Agora atribuição via desestruturação com objetos...

const pessoa = {
    nome: 'Carlos Eduardo',
    sobrenome: 'Ramos Mariano',
    idade: '21 anos',
    endereço: {
        bairro: 'Ceilândia sul',
        rua: 'Falcão negro',
        numero: 19
    }
}

// const nome = pessoa.nome;
// console.log(nome);

// const {nome: n = '', sobrenome, idade} = pessoa;
// console.log(n, sobrenome, idade);

// const { endereço : { bairro, rua, numero } } = pessoa;

// const {endereço} = pessoa;
// console.log(endereço);

const segundaPessoa = {
    nome:'Dead Fish',
    sobrenome:'Carimbo Santana',
    idade:'2000 anos'
}

// const {nome: nomeDaSegundaPessoa, sobrenome, idade} = segundaPessoa;
// console.log(nomeDaSegundaPessoa);