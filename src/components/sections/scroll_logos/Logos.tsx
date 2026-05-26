import logo1 from '../../../assets/svg/scroll_logos/logo1.svg';
import logo2 from '../../../assets/svg/scroll_logos/logo2.svg';
import logo3 from '../../../assets/svg/scroll_logos/logo3.svg';
import logo4 from '../../../assets/svg/scroll_logos/logo4.svg';
import logo5 from '../../../assets/svg/scroll_logos/logo5.svg';
import logo6 from '../../../assets/svg/scroll_logos/logo6.svg';
import logo7 from '../../../assets/svg/scroll_logos/logo7.svg';
import logo8 from '../../../assets/svg/scroll_logos/logo8.svg';
import styles from './Logos.module.css'

const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8];

const Logos = () => {
    return (
        <section className={styles.section}>
            <p className={styles.title}>Used by teams that you love</p>

            <div className={styles.marquee_container}>
                <div className={styles.marquee_track}>
                    {logos.map((logo, index) => (
                        <div key={`logo-1-${index}`} className={styles.logo_wrapper}>
                            <img src={logo} alt="Partner company logo" />
                        </div>
                    ))}

                    {logos.map((logo, index) => (
                        <div key={`logo-2-${index}`} className={styles.logo_wrapper}>
                            <img src={logo} alt="Partner company logo" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Logos;