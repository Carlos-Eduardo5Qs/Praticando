const inputTarefa = document.querySelector('.input-tarefa');
const botao = document.querySelector('.btn-add-tarefa');
const tarefa = document.querySelector('.tarefas');

function elementLi() {
    const li = document.createElement('li');
    return li;
}

function buttonClear(li) {
    li.innerText += ' ';
    const button = document.createElement('button');
    button.innerHTML = 'Apagar';
    li.appendChild(button);
}

function inputClear() {
    inputTarefa.value = '';
    inputTarefa.focus();
}

function tarefas (inputText) {
    const li = elementLi();
    li.innerText = inputText;
    tarefa.appendChild(li);
    inputClear();
    buttonClear(li);
}

botao.addEventListener('click', () => {
    if(!inputTarefa.value) return;
    tarefas(inputTarefa.value);
});

inputTarefa.addEventListener('keypress', (e) => {
    if(!inputTarefa.value) return;
    if(e.keyCode === 13) return tarefas(inputTarefa.value);
});