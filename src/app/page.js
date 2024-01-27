import Boton from "./components/buttons";
import Hechos from "./components/facts";
import Perfil from "./components/profile";
import Proyecto from "./components/project";
import Borde from "./components/tabs";
import styles from "./page.module.css";


export default function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <Perfil />
        <Hechos />
        <Boton />
        <Borde />
        <Proyecto />
      </div>
    </div>
  );
}
