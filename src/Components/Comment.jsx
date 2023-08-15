import { Avatar } from './Avatar'
import styles from './Comment.module.css'
import { ThumbsUp, Trash } from "@phosphor-icons/react"

export const Comment = () => {
    return (
        <div className={styles.comment}>
            <Avatar
                hasBorder={false}
                src="https://github.com/cleitonAmbrosini.png"
            />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Cleiton Antonio</strong>
                            <time
                                title='05 de Agosto as 13:22'
                                dateTime="2023-05-08 13:22"
                            >
                                Cerca de 1h atras
                            </time>
                        </div>

                        <button title='Deletar comentario'>
                            <Trash size={20} />
                        </button>
                    </header>
                    <p>Muito bom, parabens!</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}