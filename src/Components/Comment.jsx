import { useState } from 'react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'
import { ThumbsUp, Trash } from "@phosphor-icons/react"

export const Comment = ({content, onDeleteComment}) => {
    const [likeCount, setLikeCount] = useState(0);

    const handleLikeComment = () => {
        setLikeCount((state) => state + 1)
    }

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

                        <button title='Deletar comentario' onClick={() => onDeleteComment(content)}>
                            <Trash size={20} />
                        </button>
                    </header>
                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}