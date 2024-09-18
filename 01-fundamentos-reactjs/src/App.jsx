import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

import "./global.css";

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Douglas"
            content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium distinctio earum illo nam dignissimos reprehenderit temporibus voluptates consequuntur odit velit voluptatem eveniet laborum repellendus labore unde, nemo atque corrupti nulla!"
          />
          <Post
            author="Marcelo"
            content="Accusantium distinctio earum illo nam dignissimos reprehenderit temporibus voluptates consequuntur odit velit voluptatem eveniet laborum repellendus labore unde, nemo atque corrupti nulla!"
          />
          <Post />
        </main>
      </div>
    </div>
  );
}

export default App;
