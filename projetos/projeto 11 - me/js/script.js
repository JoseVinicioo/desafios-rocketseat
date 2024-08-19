import { toggleTheme } from "./themeFunction.js";
import { button, functionsButtons } from "./buttonsOfControls.js";

//variaveis
const body = document.querySelector('body');
let second = document.querySelector('#second');
let minute = document.querySelector('#minutes');
const form = document.querySelector('form');
const music = document.querySelector('#musicLofi')

//events
toggleTheme.button.addEventListener('click', changeTheme);
button.play.addEventListener('click', startTimer);
button.pause.addEventListener('click', pauseTimer);
button.timer.addEventListener('click', functionsButtons.changeTimer)
button.stop.addEventListener('click', ()=> {
    counter = 0, counterMin = 60;
    second.textContent = `:${counter}`;
    minute.textContent = counterMin
    pauseTimer()
})
button.speakerHigh.addEventListener('click', () => {
    toggleSpeaker()
    music.pause()
})
button.speakerNone.addEventListener('click', () => {
    toggleSpeaker()
    music.play()
})


//functions
function changeTheme() {
    body.classList.toggle('light-theme');
    // mudar icon
    if (body.classList.contains('light-theme')) {
        toggleTheme.switchToMoon();
    } else {
        toggleTheme.switchToSun();
    }
}

function toggleSpeaker(){
    button.speakerNone.classList.toggle('hide')
    button.speakerHigh.classList.toggle('hide')
}

let counter = 60, counterMin = 24;
let interval;

function startTimer() {
    interval = setInterval(() => {
        if (counter <= 0) {
            counter = 60;
            counterMin--;
        }
        counter--;
        if (counter < 10) counter = `0${counter}`;
        second.textContent = `:${counter}`;

        minute.textContent = counterMin;

    }, 1000);
    functionsButtons.toggleButtons()
}

function pauseTimer() {
    clearInterval(interval);
    functionsButtons.toggleButtons()
}


form.onsubmit = event => {
    event.preventDefault();
    functionsButtons.changeTimer()
    let inputValue = button.inputMinut.value;

    if (inputValue > 60) inputValue = 60;
    counterMin = parseInt(inputValue, 10);

    minute.textContent = counterMin;
};