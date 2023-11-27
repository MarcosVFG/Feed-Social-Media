import { PencilLine } from 'phosphor-react';

import styles from './Sidebar.module.css';
import { Avatar } from './Avatar';

export function Sidebar () {
    return (
        <aside className={styles.sidebar}>
            <img 
            src="https://images.pexels.com/photos/270632/pexels-photo-270632.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&dpr=1" alt="" 
            className={styles.cover}
            />

            <div className={styles.profile}>
                <Avatar src="https://github.com/marcosVFG.png" />
                <strong>Marcos Vinicius</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#"> 
                    <PencilLine size={20} />
                    Editar o seu perfil
                </a>
            </footer>
        </aside>
    )
}