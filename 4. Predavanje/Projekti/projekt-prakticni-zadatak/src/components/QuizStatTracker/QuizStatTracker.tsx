import styles from './QuizStatTracker.module.css'

export default function QuizStatTracker(props: any) {
    const numberOfQuestions = props.numberOfQuestions;
    const { score, correctAnswers, wrongAnswers } = props.result;
    return(
        <>
            <div id={styles.tracker}>
                <label>Pitanje: </label>
                <h1 className={styles.number}>{props.questionNumber + 1} / {numberOfQuestions}</h1>
                <label>Points: </label>
                <h1 className={styles.number}>{score}</h1>
                <label>Correct Answers: </label>
                <h1 className={styles.number}>{correctAnswers}</h1>
                <label>Wrong Answers: </label>
                <h1 className={styles.number}>{wrongAnswers}</h1>
            </div>
        </>
    );
}