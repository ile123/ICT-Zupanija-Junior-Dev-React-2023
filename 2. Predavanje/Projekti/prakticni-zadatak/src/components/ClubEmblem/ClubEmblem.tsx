import styles from './ClubEmblem.module.css'

export default function ClubEmblem(props: any) {

    return(
        <img id={styles.picture} src={props.src} alt={props.alt} />
    );
}