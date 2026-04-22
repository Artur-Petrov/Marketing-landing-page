import * as React from "react";
import type {FC} from "react";
import styles from './Button.module.css'

interface ButtonProps {
    onClick?: () => void;
    type?: 'button' | 'submit';
    disabled?: boolean;
    btnType?: 'primary' | 'secondary';
    children: React.ReactNode;
    className?: string;
}

const Button: FC<ButtonProps> = ({
                                     children,
                                     onClick,
                                     type = 'button',
                                     disabled = false,
                                     btnType = 'primary',
                                     className ='',
                                 }) => {

    const combinedStyles = `${styles.btn} ${styles[btnType]} ${className}`;

    return (
        <button
            onClick={onClick}
            disabled={disabled}
            type={type}
            className={combinedStyles}
        >
            {children}
        </button>
    );
};

export default Button;