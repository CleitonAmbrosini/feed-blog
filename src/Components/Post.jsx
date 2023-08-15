import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

const Post = () => {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar
                        src="https://github.com/cleitonAmbrosini.png"
                    />
                    <div className={styles.authorInfo}>
                        <strong>Cleiton Ambrosini</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title='01 de Agosto às 08:46h' dateTime="2023-01-08 08:46h">Públicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>conteudo do post</p>
                <p>outro conteudo do post</p>
                <p>outro novo conteudo do post</p>
                <p>
                    <a href="#">#novoprojeto</a>{' '}
                    <a href="#">#post</a>
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea
                    placeholder="Deixe seu comentário"
                />
                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}

export { Post }