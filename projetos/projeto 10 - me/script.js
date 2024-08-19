const popUp = document.querySelector('.resultBackground')
const alertNotNumber = document.querySelector('.notNumber')
const buttonCalculate = document.querySelector('#calculateIMC')
const buttonExit = document.querySelector('#exit')
let weight = document.querySelector('#weight')
let height = document.querySelector('#height')
let result = document.querySelector('#resultIMC')


//eventos
buttonCalculate.addEventListener('click', showIMC)
buttonExit.addEventListener('click', togglePopUp)
document.addEventListener('keydown', clickESC)

//funções

function clickESC(e) {
    if (e.key == 'Escape' && !popUp.classList.contains('hide')) {
        togglePopUp()
    }
}

function togglePopUp(){
    popUp.classList.toggle('hide')
}

function showIMC(){
    if (isNaN(Number(weight.value)) || isNaN(Number(height.value)) || weight.value == '' || height.value == '') {
        alertNotNumber.classList.remove('hide')
    }
    else{
        alertNotNumber.classList.add('hide')
        togglePopUp()
        result.innerHTML = `Seu IMC é de ${calculateIMC()}`
    }
}

function calculateIMC(){
    let IMC = weight.value / (height.value ** 2)
    return (IMC * 10000).toFixed(2)
}
