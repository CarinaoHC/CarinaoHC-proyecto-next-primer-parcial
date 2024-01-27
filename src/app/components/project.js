import Image from "next/image";
import { clsx } from 'clsx';
import style from './project.module.css';

function Proyecto() {
    return (
        <div className={style.project_container}>
            <div className={style.content_card_img}>
                <Image className={style.image} src="/assets/images/Hero_2.png" alt="hero" width={500} height={500} />
                <div className={style.content_card_img_overlay}></div>
                <div className={style.content_card_img_detail}>
                    <p className={style.title}>SmarterTrading411</p>
                    <p className={style.detail}>Landing page of SmarterTrading411 created using WordPress</p>
                    <button className={style.btn}>
                        <Image src="/assets/icons/link.svg" alt="link" width={500} height={500} />
                    </button>
                </div>
            </div>
            <div className={style.content_card_img}>
                <Image className={style.image} src="/assets/images/bussiness_man.png" alt="man" width={500} height={500} />
                <div className={style.content_card_img_overlay}></div>
            </div>
            <div className={style.content_card_img}>
                <Image className={clsx(
                    [style.image],
                    [style.grayscale]
                )} src="/assets/images/pictures_wall.jpeg" alt="wall" width={500} height={500} />
                <div className={style.content_card_img_overlay}></div>
            </div>
            <div className={style.content_card_img}>
                <Image className={style.image} src="/assets/images/kitchen.jpeg" alt="kitchen" width={500} height={500} />
                <div className={style.content_card_img_overlay}></div>
            </div>
            <div className={style.content_card_img}>
                <Image className={style.image} src="/assets/images/mobile_app.png" alt="app" width={500} height={500} />
                <div className={style.content_card_img_overlay}></div>
            </div>
            <div className={style.content_card_img}>
                <Image className={clsx(
                    [style.image],
                    [style.grayscale]
                )} src="/assets/images/issima_page.png" alt="page" width={500} height={500} />
                <div className={style.content_card_img_overlay}></div>
            </div>
        </div>
    );
}

export default Proyecto;