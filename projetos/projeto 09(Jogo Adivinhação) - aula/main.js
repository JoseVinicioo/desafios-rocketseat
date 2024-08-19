// Variaveis da aplicaçao 
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const btnTry = document.querySelector('#btnTry')
const btnReset = document.querySelector('#btnReset')
let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

//Eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handResetClick)
document.addEventListener('keydown', clickEnter)


//funções
function handleTryClick(event) {
    event.preventDefault() //nao faca o padra

    const inputNumber = document.querySelector('#inputNumber')

    if (inputNumber.value < 0 || inputNumber.value > 10 || inputNumber.value == '') {
        alert("Digite um número entre o intervalo indicado!!")
    } else {
        if (Number(inputNumber.value) == randomNumber) {
            toggleScreen()
            screen2.querySelector('h2').innerText = `Acertou em ${xAttempts} tentativas`
        }
        xAttempts++
    }
    inputNumber.value = ''
}

function handResetClick() {
    toggleScreen()
    xAttempts = 1
    randomNumber = Math.round(Math.random() * 10)
}

function toggleScreen() {
    screen1.classList.toggle('hide')
    screen2.classList.toggle('hide')
}

function clickEnter(e) {
    if (e.key == 'Enter' && screen1.classList.contains('hide')) {
        handResetClick()
    }
}