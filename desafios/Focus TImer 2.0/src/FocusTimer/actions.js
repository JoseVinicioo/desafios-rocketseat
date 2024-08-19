import state from "./state.js"
import * as timer from "./timer.js"
import * as el from "./elements.js"
import { stopOtherSound, addClassNoneExcept } from "./actionsButtons.js"

export function startTimer(){
    state.isRunning = true
    document.documentElement.classList.add('running')
    
    timer.countDown()
}

export function stopTimer(){
    state.isRunning = false
    document.documentElement.classList.remove('running')
    timer.updateDisplay(25,0)
    stopOtherSound()
    addClassNoneExcept()
}

export function plusSound(){
    if(state.isRunning){
        return
    }
    let minutes = Number(el.minutes.textContent)
    let seconds = Number(el.seconds.textContent)
    minutes+=5
    if(minutes > 60){
        alert('Máximo de tempo alcançado')
        minutes = 60
    }
    timer.updateDisplay(minutes, seconds)
}

export function minusSound(){
    if(state.isRunning){
        return
    }
    let minutes = Number(el.minutes.textContent)
    let seconds = Number(el.seconds.textContent)
    minutes-=5
    if(minutes < 0){
        minutes = 0
    }
    timer.updateDisplay(minutes, seconds)
}

