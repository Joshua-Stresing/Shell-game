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


button1.addEventListener('click', () => {
    ball1.classList.remove('reveal');
    ball2.classList.remove('reveal');
    ball3.classList.remove('reveal');
    total++;
    const ballLocation = Math.ceil(Math.random() * 3);
    console.log('ball is in location', ballLocation);

    if (ballLocation === 1) {
        ball1.classList.add('reveal');
        wins++;
    } else if (ballLocation === 2) {
        ball2.classList.add('reveal');
    } else {
        ball3.classList.add('reveal');
    }

    winSpan.textContent = wins;
    totalSpan.textContent = total;
    lossSpan.textContent = total - wins;
});

button2.addEventListener('click', () => {
    ball1.classList.remove('reveal');
    ball2.classList.remove('reveal');
    ball3.classList.remove('reveal');
    total++;
    const ballLocation = Math.ceil(Math.random() * 3);
    console.log('ball is in location', ballLocation);

    if (ballLocation === 1) {
        ball1.classList.add('reveal');
      } else if (ballLocation === 2) {
        ball2.classList.add('reveal');
        wins++;
      } else {
        ball3.classList.add('reveal');
    }

    winSpan.textContent = wins;
    totalSpan.textContent = total;
    lossSpan.textContent = total - wins;
});

button3.addEventListener('click', () => {
    ball1.classList.remove('reveal');
    ball2.classList.remove('reveal');
    ball3.classList.remove('reveal');
    total++;
    const ballLocation = Math.ceil(Math.random() * 3);
    console.log('ball is in location', ballLocation);

    if (ballLocation === 1) {
        ball1.classList.add('reveal');
      } else if (ballLocation === 2) {
        ball2.classList.add('reveal');
      } else {
        ball3.classList.add('reveal');
        wins++;
      }

    winSpan.textContent = wins;
    totalSpan.textContent = total;
    lossSpan.textContent = total - wins;
});