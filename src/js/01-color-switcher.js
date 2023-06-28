import getRandomHexColor from './randomHexColor.js';


const dataStart = document.querySelector('[data-start]');
const dataStop = document.querySelector('[data-stop]');
const bodyColor = document.querySelector('body');
let timerId = null;


dataStart.addEventListener('click', onStart);
dataStop.addEventListener('click', onStop);


function onStart() {
timerId = setInterval(getBgColor, 1000);

dataStart.toggleAttribute('disabled');
}


function onStop() {
clearInterval(timerId);

dataStart.removeAttribute('disabled');
}


function getBgColor() {
bodyColor.style.backgroundColor = getRandomHexColor();
}




