import type {AnchorHTMLAttributes, FC} from "react";
import styles from './CustomLink.module.css'

interface CustomLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    disabled?: boolean;
}

const CustomLink: FC<CustomLinkProps> = ({
                                             children,
                                             disabled,
                                             className = '',
                                             ...rest
                                         }) => {

    if (disabled){
        return (
            <span className={`${styles.link} ${styles.disabled} ${className}`}>{children}</span>
        )
    }

    return (
        <a className={`${styles.link} ${className}`} {...rest}>
            {children}
        </a>
    );
};

export default CustomLink;