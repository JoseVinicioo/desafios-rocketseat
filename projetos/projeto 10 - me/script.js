const biscuit = document.querySelector('#closedBiscuit')
const buttonOpenMoreBiscuit = document.querySelector('#MoreBiscuite')
const screen01 = document.querySelector('.screen01')
const screen02 = document.querySelector('.screen02')
let mensageField = document.querySelector('#randomMessage')

biscuit.addEventListener('click', clickBicuit)
buttonOpenMoreBiscuit.addEventListener('click', toogleScreen)

//funçoes
function randomMensage(){
    let message = [
        'Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.',
        'Procure acender uma vela em vez de amaldiçoar a escuridão',
        'Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.',
        'Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.',
        'Se a sua vida for a melhor coisa que já te aconteceu, acredite, você tem mais sorte do que pode imaginar.',
        'Eu acredito demais na sorte. E tenho constatado que, quanto mais duro eu trabalho, mais sorte eu tenho.',
        'A sorte não existe. Aquilo a que chamas sorte é o cuidado com os pormenores.',
        'Homens fracos acreditam na sorte. Homens fortes acreditam em causa e efeito.',
        'A perseverança é a mãe da boa sorte.',
        'Sorte é estar pronto quando a oportunidade vem.',
        'Destino não é uma questão de sorte, mas uma questão de escolha; não é uma coisa que se espera, mas que se busca.'
    ]
    let randomNumber = Math.round(Math.random() * 10)
    console.log(message)
    return message[randomNumber]
}

function clickBicuit(){
    toogleScreen()
    mensageField.innerHTML = randomMensage()

}

function toogleScreen(){
    screen01.classList.toggle('hide')
    screen02.classList.toggle('hide')
}