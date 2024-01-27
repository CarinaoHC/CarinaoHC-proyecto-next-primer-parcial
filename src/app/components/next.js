"use client"
import style from "./next.module.css";
import Perfil from "./profile";
import Hechos from "./facts";
import Boton from "./buttons";
import Borde from "./tabs";
import Proyecto from "./project";

function Next() {
    return (
        <div className={style.container}>
            <Perfil />
            <Hechos />
            <Boton />
            <Borde />
            <Proyecto />
        </div>
    );
}
export default Next;