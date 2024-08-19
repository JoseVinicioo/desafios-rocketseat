export const toggleTheme = {
    button: document.querySelector('#btnToggleMode'),
    IconOfButton: document.querySelector('#btnToggleMode > img'),

    switchToMoon(){
        this.IconOfButton.src = 'src/moon-icon.svg'
    },
    switchToSun(){
        this.IconOfButton.src = 'src/sun-icon.svg'
    }
    
}
