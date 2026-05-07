import type {FC} from "react";
import styles from './CustomLink.module.css'
import {Link, type LinkProps} from "react-router-dom";

interface CustomLinkProps extends LinkProps {
    disabled?: boolean;
}

const CustomLink: FC<CustomLinkProps> = ({
                                             children,
                                             disabled,
                                             className = '',
                                             to,
                                             ...rest
                                         }) => {

    if (disabled) {
        return (
            <span className={`${styles.link} ${styles.disabled} ${className}`}>{children}</span>
        )
    }

    return (
        <Link to={to} className={`${styles.link} ${className}`} {...rest}>
            {children}
        </Link>
    );
};

export default CustomLink;