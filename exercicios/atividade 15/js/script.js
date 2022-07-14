const paragraph = document.querySelectorAll('p');
const stylesBody = getComputedStyle(document.body);
const bodyBackground = stylesBody.backgroundColor;

for (let p of paragraph ) {
    p.style.backgroundColor = bodyBackground;
    p.style.color = 'white';
    p.style.margin = '2rem 0';
    p.style.borderRadius = '10px';
    p.style.padding = '1rem';
}