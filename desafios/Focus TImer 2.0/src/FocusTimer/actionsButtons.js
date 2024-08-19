import * as el from "./elements.js"
import * as sounds from "./sounds.js"

export function addClassNoneExcept(exception){
    let button = el.sounds.children
    for(let i = 0; i < button.length; i++){
        button[i].classList.add('none')
    }
    exception.classList.toggle('none')
}
export function stopOtherSound(){
    sounds.soundRain.pause()
    sounds.soundCafeteria.pause()
    sounds.soundRireplace.pause()
    sounds.soundFlorest.pause()
}

export function soundFlorest(){
    addClassNoneExcept(el.btnTree)
    stopOtherSound()
    sounds.soundFlorest.play()
}
export function soundRain(){
    addClassNoneExcept(el.btnCloud)
    stopOtherSound()
    sounds.soundRain.play()
}
export function soundCafeteria(){
    addClassNoneExcept(el.btnStore)
    stopOtherSound()
    sounds.soundCafeteria.play()
}
export function soundRireplace(){
    addClassNoneExcept(el.btnFire)
    stopOtherSound()
    sounds.soundRireplace.play()
}


