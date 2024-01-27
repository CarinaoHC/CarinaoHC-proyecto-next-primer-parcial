import Image from "next/image";
import style from './buttons.module.css';

function Boton() {
    return (
        <div className={style.buttons}>
            <button className={style.btn_primary} onclick="download()">
                <div className={style.btn_content}>
                    <p>Download CV</p>
                    <Image src="/assets/icons/download.svg" alt="arrow" classNameName={style.btn_primary_img} width={26} height={24} />
                </div>
            </button>
            <a className={style.btn_secondary} href="mailto:contact@me.com">
                <div className={style.btn_content}>
                    <p className={style.btn_texto}>Contact me</p>
                </div>
            </a>
        </div>
    );
}

export default Boton;