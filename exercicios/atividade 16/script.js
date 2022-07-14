const min = 1;
const max = 30;
let rand = randomNumber(min, max);

function randomNumber(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

while (rand !== 10) {
    // rand = randomNumber(min, max);
    // console.log(rand);
}

do {
    rand = randomNumber(min, max);
    console.log(rand);
} while (rand !== 10)



