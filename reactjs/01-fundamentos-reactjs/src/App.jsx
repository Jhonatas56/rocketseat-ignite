import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

import "./global.css";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Jhonatas Jorge"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quas iusto repudiandae repellat exercitationem, ratione nam, fuga magni aspernatur doloremque, minus cum molestiae deleniti laudantium nemo sapiente omnis. Nisi, porro!"
          />

          <Post
            author="Jhonatas Jorge"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quas iusto repudiandae repellat exercitationem, ratione nam, fuga magni aspernatur doloremque, minus cum molestiae deleniti laudantium nemo sapiente omnis. Nisi, porro!"
          />
        </main>
      </div>
    </div>
  );
}
