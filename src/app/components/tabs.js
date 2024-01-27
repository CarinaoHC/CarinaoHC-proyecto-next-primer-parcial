import { clsx } from 'clsx';
import style from './tabs.module.css';

function Borde() {
    return (
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
    );
}

export default Borde;