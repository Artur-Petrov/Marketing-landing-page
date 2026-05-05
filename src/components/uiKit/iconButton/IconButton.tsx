import type {ButtonHTMLAttributes, FC} from "react";
import styles from './IconButton.module.css'

type IconButtonProp = ButtonHTMLAttributes<HTMLButtonElement>;

const IconButton: FC<IconButtonProp> = ({
                                            children,
                                            className = '',
                                            ...rest
                                        }) => {
    return (
        <button type={"button"} className={`${styles.icon_button} ${className}`} {...rest}>
            {children}
        </button>
    );
};

export default IconButton;