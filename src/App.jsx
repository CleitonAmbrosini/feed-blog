import styles from './App.module.css'
import { Header } from "./Components/Header";
import { Sidebar } from './Components/Sidebar';
import { Post } from './Components/Post';

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Cleiton Ambrosini"
            content="lorem ipsum dolor sit amet"
          />
          <Post
            author="Cleiton Antonio"
            content="olá"
          />
        </main>
      </div>
    </div>
  );
}

export default App;
