const randomValue = Math.round(Math.random() * 10);
let count = 1;

const button = document.getElementById('tentar');
const numberInput = document.querySelector('#numberInput');
const error = document.querySelector('.error');
const finatilityMenu = document.querySelector('.finality');
const menuPrincip = document.querySelector('.menu');
const result = document.querySelector('#result');
const jogarNovamente = document.querySelector('#jogarNovamente');

// Função para reiniciar o jogo
function resetGame() {
    location.reload();
}

// Função para verificar o valor
function checkValue() {
    const numberValue = numberInput.value.trim();

    count++;
    
    if (parseInt(numberValue) === randomValue) {
        menuPrincip.style.display = 'none';
        finatilityMenu.style.display = 'flex';
        result.innerHTML += `${count} tentativas!`;
    } else {
        error.style.display = 'block';
        error.style.animation = 'teste 1s infinite';
    }

    numberInput.value = '';
    numberInput.focus();
}

// Event listeners
button.addEventListener('click', checkValue);
jogarNovamente.addEventListener('click', resetGame);
