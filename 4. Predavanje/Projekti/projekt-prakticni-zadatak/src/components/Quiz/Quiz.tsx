import { useEffect, useState } from 'react';
import styles from './Quiz.module.css'
import QuizStatTracker from '../QuizStatTracker/QuizStatTracker';
import { Card } from 'react-bootstrap';
import styled from 'styled-components'
import WrongAnswer from '../../SVG/WrongAnswer';
import CorrectAnswer from '../../SVG/CorrectAnswer';

const Answer = styled.button`
  color: black;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  width: 30rem;
  height: 3rem;
  border: 2px solid aliceblue;
  border-radius: 25px;
  pointer-events:${(props)=>props.disabled?'none':null};
`;

const NextButton = styled.button`
  color: ${(props)=>props.disabled?'black':'white'};
  font-size: 1em;
  margin: 1em;
  margin-left: 44.5rem;
  padding: 0.25em 1em;
  width: 7rem;
  height: 3rem;
  border: 2px solid blue;
  border-radius: 25px;
  pointer-events:${(props)=>props.disabled?'none':null};
  background-color:${(props)=>props.disabled?'white':'blue'};
`;

export default function Quiz(props: any) {

    let [questions] = useState(props.questions);
    let numberOfQuestions = questions.reduce((a: any, obj: any) => a + (Object.keys(obj).length -5), 0);
    const [activeQuestion, setActiveQuestion] = useState(0);
    const { correct_answer, incorrect_answers } = questions[activeQuestion];
    const [selectedAnswer, setSelectedAnswer] = useState(false);
    const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
    const [questionNumber, setQuestionNumber] = useState(0);
    const [result, setResult] = useState(props.result);

    const shuffleAnswers = (answers: any) => {
        let currentIndex = answers.length,  randomIndex;
        while (currentIndex != 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [answers[currentIndex], answers[randomIndex]] = [
            answers[randomIndex], answers[currentIndex]];
        }
        return answers;
    }

    const onClickNext = () => {
        if(activeQuestion + 1 === numberOfQuestions) {
            props.onShowResultScreen(result);
            setActiveQuestion(0);
            questions = [];
            return;
        }
        setActiveQuestion((prev) => prev + 1);
        setQuestionNumber((prev) => prev + 1);
        setSelectedAnswer(false);
    }

    const onAnswerSelected = (answer: any) => {
        let newScore = {...result}
        if (answer === correct_answer) {
            newScore.correctAnswers++;
            newScore.score += 5;
            setIsAnswerCorrect(true);
        } else {
            newScore.wrongAnswers++;
            setIsAnswerCorrect(false);
        }
        setResult(newScore);
        setSelectedAnswer(true);
      }

    let answers = [correct_answer, ...incorrect_answers];

    useEffect(() => {
        answers = [correct_answer, ...incorrect_answers];
        answers = shuffleAnswers([correct_answer, ...incorrect_answers]);
    }, [activeQuestion]);

    return(
        <>
            <div id={styles.center}>
                <Card id={styles.left}>
                    <Card.Header id={styles.question}>{questions[activeQuestion]["question"]}</Card.Header>
                    <Card.Body id={styles.answers}>
                        {answers.map((answer: any) => (
                            <Answer onClick={() => onAnswerSelected(answer)} 
                                key={answer} 
                                disabled={selectedAnswer}
                                > {answer}</Answer>
                        ))}
                        <br />
                        {(selectedAnswer && !isAnswerCorrect) && <WrongAnswer height={50} width={50} />}
                        {(selectedAnswer && isAnswerCorrect) && <CorrectAnswer height={50} width={50} />}
                    </Card.Body>
                </Card>
                <Card id={styles.right}>
                    <QuizStatTracker questionNumber={questionNumber} result={result} numberOfQuestions={numberOfQuestions} />
                </Card>
            </div>
            <NextButton disabled={!selectedAnswer} onClick={onClickNext}>Next</NextButton>
        </>
    );
}
