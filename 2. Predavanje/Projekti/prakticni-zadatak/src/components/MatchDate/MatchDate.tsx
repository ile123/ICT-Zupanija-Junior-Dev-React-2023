import styles from './MatchDate.module.css'

export default function MatchDate() {

    return(
        <>
             <h4 id={styles.date}>{new Date().toJSON().slice(0, 10)}</h4>  
        </>
    );
}