import React from 'react';
import styles from './App.module.css'
import { Header } from "./Components/Header";
import { Sidebar } from './Components/Sidebar';
import { Post } from './Components/Post';

const posts = [
  {
    id: 1,
    author: {
      avatarURL: "https://github.com/cleitonAmbrosini.png",
      name: "Cleiton Ambrosini",
      role: "Software Engineer"
    },
    content: [
      {
        type: 'paragraph', content: 'Fala galera, beleza?'
      },
      {
        type: 'paragraph', content: 'Estou fazendo esse post para testar'
      },
      {
        type: 'link', content: 'https://google.com'
      }
    ],
    publishedAt: new Date('2023-08-16 12:30:25'),
  },
  {
    id: 2,
    author: {
      avatarURL: "https://github.com/cleitonAmbrosini.png",
      name: "Fulano Ciclano",
      role: "Software Engineer II"
    },
    content: [
      {
        type: 'paragraph', content: 'Fala galera, tudo bem?'
      },
      {
        type: 'paragraph', content: 'Estou fazendo esse outro post para testar a aplicação'
      },
      {
        type: 'link', content: 'https://google.com'
      }
    ],
    publishedAt: new Date('2023-09-08 17:22:25'),
  },
]

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <React.Fragment key={`${post.id}-${post.publishedAt}`}>
                <Post
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                  />
              </React.Fragment>
            )
          })}
        </main>
      </div>
    </div>
  );
}

export default App;
