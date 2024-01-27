import Image from "next/image";
import style from './profile.module.css';

function Perfil() {
    return (
        <div className={style.profile}>
            <figure className={style.profile_img}>
                <Image src="/assets/images/perfil_picture.jpeg" alt="perfil" width={205} height={205} priority/>
            </figure>
            <div className={style.profile_info}>
                <h1>Victor Alvarado</h1>
                <p>Software Engineer</p>
                <div className={style.profile_social}>
                    <a href="https://github.com" target="_blank">
                        <Image src="/assets/icons/github.svg" alt="github" className={style.profile_social_img} width={36} height={36} />
                    </a>
                    <a href="https://twitter.com" target="_blank">
                        <Image src="/assets/icons/twitter.svg" alt="twitter" className={style.profile_social_img} width={36} height={36} />
                    </a>
                    <a href="https://linkedin.com" target="_blank">
                        <Image src="/assets/icons/linkedin.svg" alt="linkedin" className={style.profile_social_img} width={36} height={36} />
                    </a>
                    <a href="https://youtube.com" target="_blank">
                        <Image src="/assets/icons/youtube.svg" alt="youtube" className={style.profile_social_img} width={36} height={36} />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Perfil;