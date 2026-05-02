import type {FC} from "react";
import styles from './Toggle.module.css'

interface ToggleProps {
    leftOption: string,
    rightOption: string,
    activeOption: string,
    onChange: (value: string) => void
}

const Toggle: FC<ToggleProps> = ({
                                     leftOption,
                                     rightOption,
                                     activeOption,
                                     onChange,
                                 }) => {

    const handleLeft = ()=>{
        onChange(leftOption)
    }

    const handleRight = ()=>{
        onChange(rightOption)
    }

    let isLeftActive = false;
    let isRightActive = false;

    if (activeOption === leftOption) {
        isLeftActive = true;
    } else {
        isRightActive = true;
    }

    return (
        <div className={styles.toggle_container}>
            <button type="button" className={`${styles.toggle_button} ${isLeftActive ? styles.active_toggle: ''}`} onClick={handleLeft}>{leftOption}</button>
            <button type="button" className={`${styles.toggle_button} ${isRightActive ? styles.active_toggle: ''}`} onClick={handleRight}>{rightOption}</button>
        </div>
    );
};

export default Toggle;