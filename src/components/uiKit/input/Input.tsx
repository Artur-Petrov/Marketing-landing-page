import {type FC, type ReactNode} from "react";
import * as React from "react";
import styles from './Input.module.css'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    hint?: string;
    error?: string;
    icon?: ReactNode;
}

const Input:FC<InputProps> = ({
                   label,
                   hint,
                   error,
                   icon,
                   className = '',
                   id,
                   disabled,
                   ...rest
               }) => {

    const generatedId = React.useId();
    const inputId = id || generatedId;

    return (
        <div className={`${styles.input_container} ${className}`}>
            {label && (
                <label htmlFor={inputId} className={`${styles.label}`}>{label}</label>
            )}


            <div className={`
            ${styles.input_wrapper} 
            ${error? styles.input_error: ''} 
            ${disabled ? styles.input_disabled : ''}`}>
                <input id={inputId} disabled={disabled} className={styles.input} {...rest}/>

                {icon && (
                    <div className={styles.input_icon}>{icon}</div>
                )}

            </div>

            {(error || hint) && (
                <span className={`${styles.input_hint} ${error ? styles.input_error_text : ''}`}>{error || hint}</span>
            )}
        </div>
    );
};

export default Input;