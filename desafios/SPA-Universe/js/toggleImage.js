
const home = document.getElementById('home')
const universe = document.getElementById('universe')
const exploration = document.getElementById('exploration')

home.addEventListener('click', () => {
    document.body.style.background = `url('/assets/bg-01.png')no-repeat center/cover`
})


universe.addEventListener('click', () => {
    document.body.style.background = `url('/assets/bg-02.png')no-repeat center/cover`
})

exploration.addEventListener('click', () => {
    document.body.style.background = `url('/assets/bg-03.png')no-repeat center/cover`
})

