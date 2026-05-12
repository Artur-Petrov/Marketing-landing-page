import styles from './Hero.module.css'
import data from '../../data/data.json'
import Button from "../uiKit/button/Button.tsx";
import HeroImg from '../../assets/svg/Hero_image.png'

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.wrapper}>
                <div className={styles.text_wrapper}>
                    <h1 className={styles.title}>
                        {data.hero.title}
                    </h1>
                    <p className={styles.desc}>
                        {data.hero.desc}
                    </p>
                    <div className={styles.buttons_wrapper}>
                        <Button btnType={"secondary"}>{data.hero.buttons.primary}</Button>
                        <Button btnType={"primary"}>{data.hero.buttons.secondary}</Button>
                    </div>
                </div>

                <div className={styles.img_wrapper}>
                    <img src={HeroImg} alt="Abstract shapes"/>
                </div>

            </div>
        </section>
    );
};

export default Hero;