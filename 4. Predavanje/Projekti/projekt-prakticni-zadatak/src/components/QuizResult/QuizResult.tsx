import { Card } from "react-bootstrap";
import styles from './QuizResult.module.css'

export default function QuizResult(props: any) {
    const result = props.result;
    const hideQuizResultHandler = () => {
        props.onHideResultScreen();
    }

    return(
        <>
            <Card id={styles.scoreCard}>
                <h3 className={styles.text}>Points: </h3>
                <h3 className={styles.text}>{result["score"]}</h3>
                <h3 className={styles.text}>Right anwsers: </h3>
                <h3 className={styles.text}>{result["correctAnswers"]}</h3>
                <h3 className={styles.text}>Wrong anwsers: </h3>
                <h3 className={styles.text}>{result["wrongAnswers"]}</h3>
                <button onClick={hideQuizResultHandler} id={styles.button}>Hide</button>
            </Card>
        </>
    );
}