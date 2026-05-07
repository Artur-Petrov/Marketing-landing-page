import {useState} from "react";
import styles from './Header.module.css'
import IconButton from "../../components/uiKit/iconButton/IconButton.tsx";
import CustomLink from "../../components/uiKit/customLink/CustomLink.tsx";

const Header = () => {

    const [openMenu, setOpenMenu] = useState(false);

    const menuHandler = () => {
        setOpenMenu(!openMenu);
    }

    return (
        <header className={styles.header}>

            <div className={styles.top_wrapper}>

                <div className={styles.logo_wrapper}>

                    <div className={styles.logo}>
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M11.5006 23.8999H20.8638L21.7445 26.5H10.6199L11.5006 23.8999ZM4.26556 26.499L11.8635 5.5H4.33333C3.04467 5.5 2 6.54467 2 7.83333V24.1667C2 25.4327 3.00824 26.4632 4.26556 26.499ZM28.1524 26.4494C29.2079 26.2259 30 25.2888 30 24.1667V7.83333C30 6.54467 28.9553 5.5 27.6667 5.5H20.5724L28.1524 26.4494ZM16.1822 9.99793L19.2914 19.1825H13.1088L16.1822 9.99793Z"
                                  fill="#6366F1"/>
                        </svg>

                    </div>
                    <span className={`${styles.logo_text} ${'text-lg'}`}><b>Abstractly</b></span>

                </div>

                <IconButton onClick={menuHandler}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M3.75 4.44446H16.25V5.83335H3.75V4.44446ZM3.75 9.30557H16.25V10.6945H3.75V9.30557ZM3.75 14.1667H16.25V15.5556H3.75V14.1667Z"
                            fill="currentColor"/>
                    </svg>
                </IconButton>
            </div>


            <nav className={`${styles.nav} ${openMenu ? styles.nav_active: ''}`}>
                <CustomLink to={'/home'} onClick={menuHandler}>Home</CustomLink>
                <CustomLink to={'/features'} onClick={menuHandler}>Features</CustomLink>
                <CustomLink to={'/pricing'} onClick={menuHandler}>Pricing</CustomLink>
                <CustomLink to={'/about'} onClick={menuHandler}>About us</CustomLink>
                <CustomLink to={'/contact'} onClick={menuHandler}>Contact</CustomLink>
            </nav>

        </header>
    );
};

export default Header;