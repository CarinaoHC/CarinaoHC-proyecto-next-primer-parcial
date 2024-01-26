"use client"
import Image from "next/image";
import style from "./next.module.css";
import { clsx } from 'clsx';

function Next() {
    return (
        <div className={style.container}>
            <div className={style.profile}>
                <figure className={style.profile_img}>
                    <Image src="/assets/images/perfil_picture.jpeg" alt="perfil" width={205} height={205} />
                </figure>
                <div className={style.profile_info}>
                    <h1>Victor Alvarado</h1>
                    <p>Software Engineer</p>
                    <div className={style.profile_social}>
                        <a href="https://github.com" target="_blank">
                            <Image src="/assets/icons/github.svg" alt="github" classNameName={style.profile_social_img} width={36} height={36} />
                        </a>
                        <a href="https://twitter.com" target="_blank">
                            <Image src="/assets/icons/twitter.svg" alt="twitter" classNameName={style.profile_social_img} width={36} height={36} />
                        </a>
                        <a href="https://linkedin.com" target="_blank">
                            <Image src="/assets/icons/linkedin.svg" alt="linkedin" classNameName={style.profile_social_img} width={36} height={36} />
                        </a>
                        <a href="https://youtube.com" target="_blank">
                            <Image src="/assets/icons/youtube.svg" alt="youtube" classNameName={style.profile_social_img} width={36} height={36} />
                        </a>
                    </div>
                </div>
            </div>
            <div className={style.facts}>
                <div className={style.fact_item}>
                    <h2>7</h2>
                    <p>Years of work experience</p>
                </div>
                <div className={style.fact_item}>
                    <h2>50+</h2>
                    <p>Completed projects</p>
                </div>
                <div className={style.fact_item}>
                    <h2>20+</h2>
                    <p>Satisfied customers</p>
                </div>
            </div>
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
            <div className={style.tabs}>
                <button className={clsx(
                    [style.tabs_background_item],
                    [style.active]
                )}>
                    <p className={style.tabs_background_item_text}>Portfolio</p>
                </button>
                <button className={style.tabs_background_item}>
                    <p className={style.tabs_background_item_text}>Skills</p>
                </button>

            </div>
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
        </div>
    );
}
export default Next;