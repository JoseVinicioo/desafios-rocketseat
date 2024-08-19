export const button = {
    play: document.querySelector('#playIcon'),
    pause: document.querySelector('#pauseIcon'),
    timer: document.querySelector('#timerIcon'),
    stop: document.querySelector('#stopIcon'),
    speakerNone: document.querySelector('#speakerNoneIcon'),
    speakerHigh: document.querySelector('#speakerHighIcon'),
    inputMinut: document.querySelector('#changeTime'),
    minuts: document.querySelector('#minutes'),
}

export const functionsButtons = {
    toggleButtons() {
        button.play.classList.toggle('hide')
        button.pause.classList.toggle('hide')
        button.timer.classList.toggle('hide')
        button.stop.classList.toggle('hide')
    },

    changeTimer() {
        button.minuts.classList.toggle('hide')
        button.inputMinut.classList.toggle('hide')
    }
}
