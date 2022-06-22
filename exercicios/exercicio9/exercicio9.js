function meuEscopo() {
    const form = document.querySelector('.form');
    const resultados = document.querySelector('.resultados');
    const pessoas = [];

    function recebeEventoForm(evento) {
        evento.preventDefault();

        const nome = document.querySelector('.nome');
        const sobrenome = document.querySelector('.sobrenome');
        const peso = document.querySelector('.peso');
        const altura = document.querySelector('.altura');

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        })

        console.log(pessoas);

        resultados.innerHTML = ('');
        resultados.innerHTML += `Seu nome é ${nome.value}, seu sobrenome é ${sobrenome.value}` + 
        ` você pesa ${peso.value}, sua altura é de ${altura.value}`;
    }

    form.addEventListener('submit', recebeEventoForm);
}
meuEscopo();