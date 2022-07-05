function criaPessoas(nome, sobrenome, idade) {
    return {
        nome, sobrenome, idade
    };
}

const criandoPessoa1 = criaPessoas('Carlos Eduardo', 'Ramos Mariano', 21);
const criandoPessoa2 = criaPessoas('Monica Matos', 'Santa Rosa', 30);
const criandoPessoa3 = criaPessoas('Carimbo Marciano', 'Eduardo', 23);

console.log(criandoPessoa1.nome, criandoPessoa1.sobrenome, criandoPessoa1.idade,);
console.log(criandoPessoa2.nome, criandoPessoa2.sobrenome, criandoPessoa2.idade);
console.log(criandoPessoa3.nome, criandoPessoa3.sobrenome, criandoPessoa3.idade);

const pessoa1 = {
    nome: 'Carlos Eduardo',
    sobrenome: 'Ramos Mariano',
    idade: 21,

    fala() {
        console.log(`A minha idade atual é ${this.idade}`);
    },

    incrementaIdade() {
        this.idade++;
    }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
