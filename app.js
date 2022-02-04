const ball1 = document.getElementById('ball-1');
const ball2 = document.getElementById('ball-2');
const ball3 = document.getElementById('ball-3');

const button1 = document.getElementById('shell-1-button');
const button2 = document.getElementById('shell-2-button');
const button3 = document.getElementById('shell-3-button');

const winSpan = document.getElementById('wins');
const lossSpan = document.getElementById('losses');
const totalSpan = document.getElementById('total');

let wins = 0;
let total = 0;

function removeBall(){
    ball1.classList.remove('reveal');
    ball2.classList.remove('reveal');
    ball3.classList.remove('reveal');
}


function displayResults(){
    total++;
    winSpan.textContent = wins;
    totalSpan.textContent = total;
    lossSpan.textContent = total - wins;
}


button1.addEventListener('click', () => {
    removeBall();
    const ballLocation = Math.ceil(Math.random() * 3);
    

    if (ballLocation === 1) {
        ball1.classList.add('reveal');
        wins++;
    } else if (ballLocation === 2) {
        ball2.classList.add('reveal');
    } else {
        ball3.classList.add('reveal');
    }

    displayResults();
});

button2.addEventListener('click', () => {
    removeBall();
    const ballLocation = Math.ceil(Math.random() * 3);
    

    if (ballLocation === 1) {
        ball1.classList.add('reveal');
    } else if (ballLocation === 2) {
        ball2.classList.add('reveal');
        wins++;
    } else {
        ball3.classList.add('reveal');
    }

    displayResults();
});

button3.addEventListener('click', () => {
    removeBall();
    const ballLocation = Math.ceil(Math.random() * 3);
    

    if (ballLocation === 1) {
        ball1.classList.add('reveal');
    } else if (ballLocation === 2) {
        ball2.classList.add('reveal');
    } else {
        ball3.classList.add('reveal');
        wins++;
    }

    displayResults();
});

