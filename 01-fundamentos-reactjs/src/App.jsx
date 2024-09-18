import { Header } from "./components/Header";
import { Post } from "./Post";

import "./styles.css";

function App() {
  return (
    <div>
      <Header />
      <Post
        author="Douglas"
        content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium distinctio earum illo nam dignissimos reprehenderit temporibus voluptates consequuntur odit velit voluptatem eveniet laborum repellendus labore unde, nemo atque corrupti nulla!"
      />
      <Post
        author="Marcelo"
        content="Accusantium distinctio earum illo nam dignissimos reprehenderit temporibus voluptates consequuntur odit velit voluptatem eveniet laborum repellendus labore unde, nemo atque corrupti nulla!"
      />
    </div>
  );
}

export default App;
