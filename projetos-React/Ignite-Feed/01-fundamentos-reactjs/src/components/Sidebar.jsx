import { Avatar } from "./avatar"
import styles from "./Sidebar.module.css"
import {PencilLine} from 'phosphor-react'

export function Sidebar(){
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} src="https://images.unsplash.com/photo-1457305237443-44c3d5a30b89?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
            <div className={styles.profile}>
                <Avatar  src="https://media.licdn.com/dms/image/v2/D4D35AQHahTQpNrTuBA/profile-framedphoto-shrink_100_100/profile-framedphoto-shrink_100_100/0/1724098620113?e=1725458400&v=beta&t=egPIhSb27gK2ffY0FRU1-q_pPresz7OW2Ekr1oXPMh8"/>

                <strong>Jose Vinicio</strong>
                <span>Web Developer</span>
            </div>
            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}