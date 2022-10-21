const allText = document.querySelectorAll('.content-background-container p');
const startBtn = document.querySelector('.start-btn');
const sBtn = document.querySelector('#submit-btn');
const all = document.querySelectorAll('.input-data input');
const txt = document.querySelector('textarea');
const txt1 = document.querySelector('.input1');
const txt2 = document.querySelector('.input2');
const txt3 = document.querySelector('.input3');

allText.forEach((text, index) => {
    if (text.style.animation) {
        text.style.animation = "";
    } else {
        text.style.animation = `animation 1s ease forwards ${(index+2)/3}s`;
    }
});

startBtn.style.animation = "a 1s ease forwards 3s";

sBtn.addEventListener('click', () => {
    if (txt1.value != "" && txt2.value != "" && txt3.value != "" && txt.value != '') {
        window.location.href="mailto:support@eUT.com"
    }
});