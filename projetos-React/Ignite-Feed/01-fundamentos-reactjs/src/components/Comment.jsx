import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";
import { Avatar } from "./avatar";

export function Comment({content}) {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false}
        src="https://media.licdn.com/dms/image/v2/D4D35AQHahTQpNrTuBA/profile-framedphoto-shrink_100_100/profile-framedphoto-shrink_100_100/0/1724098620113?e=1725458400&v=beta&t=egPIhSb27gK2ffY0FRU1-q_pPresz7OW2Ekr1oXPMh8"
      />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Jose Vinicio</strong>
              <time
                title="29 de Agosto às 15:00h"
                datetime="2024-08-29 15:00:00"
              >
                Cerca de 2h atrás
              </time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
            <button>
                <ThumbsUp/>
                Aplaudir <span>20</span>
            </button>
        </footer>
      </div>
    </div>
  );
}
