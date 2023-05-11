import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Quiz from './components/Quiz/Quiz';
import { useState } from 'react';
import QuizResult from './components/QuizResult/QuizResult';
import QuizOptions from './components/QuizOptions/QuizOptions';

export default function App() {

  const [showResultScreen, setShowResultScreen] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
});

  const gameStartedHandler = (questions: any) => {
    console.log({...questions})
    setQuestions(questions);
    setGameStarted(true);
  }

  const showResultScreenHandler = (results: any) => {
    const newResult = {...results}
    setShowResultScreen(true);
    setResult(newResult);
  }

  const hideResultScreenHandler = () => {
    setResult({
      score: 0,
      correctAnswers: 0,
      wrongAnswers: 0,
    });
    setShowResultScreen(false);
    setGameStarted(false);
  }

  const DUMMY_QUESTIONS = [
    {
      "category": "Entertainment: Video Games",
      "type": "multiple",
      "difficulty": "easy",
      "question": "What household item make the characters of &quot;Steins; Gate&quot; travel through time?",
      "correct_answer": "Microwave",
      "incorrect_answers": ["Computer", "Refrigerator", "Televison"]
    },
    {
      "category": "General Knowledge",
      "type": "boolean",
      "difficulty": "hard",
      "question": "Spoon theory is a theory, utilizing &quot;Spoons&quot; as a metaphor for energy they can use in a day.",
      "correct_answer": "True",
      "incorrect_answers": ["False"]
    },
    {
      "category": "Animals",
      "type": "multiple",
      "difficulty": "medium",
      "question": "What type of animal is a natterjack?",
      "correct_answer": "Toad",
      "incorrect_answers": [ "Bird", "Fish", "Insect" ]
    },
    {
      "category": "Geography",
      "type": "multiple",
      "difficulty": "easy",
      "question": "Which of the following languages does NOT use the Latin alphabet?",
      "correct_answer": "Georgian",
      "incorrect_answers": [ "Turkish", "Swahili", "Vietnamese" ]
    },
    {
      "category": "General Knowledge",
      "type": "boolean",
      "difficulty": "easy",
      "question": "On average, at least 1 person is killed by a drunk driver in the United States every hour.",
      "correct_answer": "True",
      "incorrect_answers": [ "False" ]
    }
  ];

  return (
    <div className="App">
        {!gameStarted && <QuizOptions onGameStarted={gameStartedHandler}/>}
        {(!showResultScreen && gameStarted) && <Quiz questions={questions} onShowResultScreen={showResultScreenHandler} result={result}/>}
        {(showResultScreen && gameStarted) && <QuizResult result={result} onHideResultScreen={hideResultScreenHandler} />}
    </div>
  )
}