import styles from './Button.module.css'

export default function Button(props: any) {
    return(
        <button id={styles.button} type={props.type}>{props.children}</button>
    );
}