const productCards = document.querySelectorAll('.card');
const changeColorAllCardBtn = document.querySelector('#changeAllColorCardBtn');
const greenColorHash = '#00FF00';
const blueColorHash = '#0000FF';

changeColorAllCardBtn.addEventListener('click', () => {
  productCards.forEach((card) => card.style.backgroundColor = greenColorHash)
})

const firstProductCard = document.querySelector('.card');
const changeColorFirstCardBtn = document.querySelector('#changeFirstColorCardBtn');

changeColorFirstCardBtn.addEventListener('click', () => {
  firstProductCard.style.backgroundColor = blueColorHash;
})

const openGoogleBtn = document.querySelector('#openGoogleBtn');

openGoogleBtn.addEventListener('click', openGoogle);

function openGoogle() {
  const answer = confirm('Ты уверен емае блин?');

  if (answer === true) {
    window.open('https://www.google.com');
  } else {
    return;
  }
}

const outputConsoleLogBtn = document.querySelector('#outputConsoleLogBtn');

outputConsoleLogBtn.addEventListener('click', () => outputConsoleLog('ДЗ #4'));

function outputConsoleLog(message) {
  alert('Смотри в консоль лог!');
  console.log(message);
}