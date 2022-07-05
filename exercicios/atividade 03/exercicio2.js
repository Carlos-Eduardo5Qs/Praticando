let nome = prompt('Qual o seu nome?');

document.body.innerHTML = (`O nome <strong>${nome}</strong> tem <strong>${nome.length}</strong> letras;<br>`);
document.body.innerHTML += (`A segunda letra do seu nome é a letra <strong>${nome[1]}</strong>;<br>`);
document.body.innerHTML += (`O primeiro indice da letra "A" no seu nome é <strong>${nome.indexOf('a')}</strong>;<br>`);
document.body.innerHTML += (`O último indice da letra "A" no seu nome é <strong>${nome.lastIndexOf('a')}</strong><br>`);
document.body.innerHTML += (`As últimas letras do seu nome são <strong>${nome.slice(-3)}</strong>;<br>`);
document.body.innerHTML += (`As palavras do seu nome são as <strong>${nome.split('')}</strong>;<br>`);
document.body.innerHTML += (`Seu nome em letras maiúsculas: <strong>${nome.toUpperCase()}</strong>;<br>`);
document.body.innerHTML += (`Seu nome em letras minúsculas: <strong>${nome.toLowerCase()}</strong>;`);