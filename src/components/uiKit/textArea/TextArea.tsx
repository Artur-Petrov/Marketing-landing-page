import * as React from "react";
import {type FC, useState} from "react";
import styles from './TextArea.module.css'

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    hint?: string;
    error?: string;
}

const TextArea: FC<TextAreaProps> = ({
                                         label,
                                         hint,
                                         error,
                                         className = '',
                                         id,
                                         disabled,
                                         maxLength,
                                         onChange,
                                         value,
                                         defaultValue,
                                         ...rest
                                     }) => {
    const generatedId = React.useId();
    const textAreaId = id || generatedId;

    let initialLength = 0;
    if (defaultValue) {
        initialLength = String(defaultValue).length;
    }
    const [internalCount, setInternalCount] = useState(initialLength);

    let currentLength = 0;
    if (value !== undefined) {
        currentLength = String(value).length;
    } else {
        currentLength = internalCount;
    }

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInternalCount(event.target.value.length);
        if (onChange) {
            onChange(event);
        }
    };

    let isOverLimit = false;
    if (maxLength) {
        if (currentLength > maxLength) {
            isOverLimit = true;
        }
    }

    let hasError = false;
    if (error) {
        hasError = true;
    } else if (isOverLimit) {
        hasError = true;
    }

    return (
        <div className={`${styles.textArea_container} ${className}`}>
            {label && (
                <label htmlFor={textAreaId} className={`${styles.label}`}>{label}</label>
            )}

            <div className={`
                ${styles.textArea_wrapper} 
                ${hasError ? styles.textArea_error : ''} 
                ${disabled ? styles.textArea_disabled : ''}
            `}>
                <textarea id={textAreaId} disabled={disabled} className={styles.textArea}
                    onChange={handleChange} value={value} defaultValue={defaultValue}
                    {...rest}
                />
            </div>

            {(hint || error || maxLength) && (
                <div className={styles.bottom_row}>
                    <span className={`${styles.textArea_hint} ${hasError ? styles.textArea_error_text : ''}`}>
                        {error || hint}
                    </span>

                    {maxLength && (
                        <span className={`${styles.counter} ${hasError ? styles.textArea_error_text : ''}`}>
                            {currentLength}/{maxLength}
                        </span>
                    )}
                </div>
            )}
        </div>
    );
};

export default TextArea;