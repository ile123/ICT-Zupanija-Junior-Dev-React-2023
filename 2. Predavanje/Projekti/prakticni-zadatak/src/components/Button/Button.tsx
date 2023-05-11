import styles from './Button.module.css'

export default function Button(props: any) {
    return(
        <button className={styles.button} onClick={props.onButtonClick}>{props.children}</button>
    );
}