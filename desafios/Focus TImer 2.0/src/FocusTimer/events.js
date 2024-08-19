import { controls, sounds } from "./elements.js";
import * as actions from "./actions.js"
import * as buttons from "./actionsButtons.js"

export function registerControls(){
    controls.addEventListener('click', () => {
        const action = event.target.dataset.action
        if(typeof actions[action] != "function"){
            return
        }
        actions[action]()
    })
    sounds.addEventListener('click', () => {
        const action = event.target.dataset.action
        if(typeof buttons[action] != "function"){
            return
        }
        buttons[action]()
    })
}