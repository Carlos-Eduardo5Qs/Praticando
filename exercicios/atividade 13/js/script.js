const elementos = [
    { tag: 'p', text: 'Criando motivos para se manter focado nos estudos, ' },
    { tag: 'div', text: 'Planejando o Roadmap de seus estudos, ' },
    { tag: 'section', text: 'Afastando toxidades do terreno de convívio com a sociedade, ' },
    { tag: 'footer', text: 'Colocando todos os planos planejados em ação, ' },
    { tag: 'body', text: '!!!APERTANDO OS CINTOS E DECOLANDO PARA NOSSA AVENTURA MISTICA!!!' }
];

const container = document.querySelector('.container-child');
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++) {
    let {tag, text} = elementos[i];
    const createTag = document.createElement(tag);
    createTag.innerHTML = text;
    div.appendChild(createTag);
}
 container.appendChild(div);
