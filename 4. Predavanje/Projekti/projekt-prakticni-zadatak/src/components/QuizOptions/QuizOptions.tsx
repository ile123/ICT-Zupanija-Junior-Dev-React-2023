import { useEffect, useState } from 'react';
import styles from './QuizOptions.module.css'
import axios from 'axios';
import { Card } from 'react-bootstrap';

export default function QuizOptions(props: any) {
//moze biti ili tezina, kategorija, ili broj pitanja modificirano
    const [difficulty, setDifficulty] = useState('');
    const [category, setCategory] = useState(0);
    const [numberOfQuestions, setNumberOfQuestions] = useState(0);

    async function getQuestions() {
        let url = 'https://opentdb.com/api.php?'
        if(numberOfQuestions === 0) {
            url += 'amount=5';
        } else {
            url += ('amount=' + numberOfQuestions.toString());
        }
        if(category !== 0) {
            url += ('&category=' + category.toString());
        }
        if(difficulty.trim() !== '') {
            url += ('&difficulty=' + difficulty);
        }
        await axios.get(url)
            .then(res => props.onGameStarted(res.data.results));
        
    }

    const startGameHandler = () => {
        getQuestions();
    }

    return(
        <>
            <Card id={styles.card}>
                <h3>Amount: </h3>
                <input type="number" name="numberOfQuestions" onChange={(event: any) => setNumberOfQuestions(event.target.value)} min={1} />
                <h3>Category: </h3>
                <select name="category" onChange={(event: any) => setCategory(event.target.value)}>
                    <option value={0}>Any Category</option>
                    <option value={9}>General Knowledge</option>
                    <option value={10}>Entertaiment: Books</option>
                    <option value={11}>Entertaiment: Film</option>
                    <option value={12}>Entertaiment: Music</option>
                    <option value={13}>Entertaiment: Musicals And Theather</option>
                    <option value={14}>Entertaiment: Televisons</option>
                    <option value={15}>Entertaiment: Video Games</option>
                    <option value={16}>Entertaiment: Board Games</option>
                    <option value={31}>Entertainment: Japanese Anime & Manga</option>
                    <option value={32}>Entertainment: Cartoon & Animations</option>
                    <option value={29}>Entertainment: Comics</option>
                    <option value={17}>Science & Nature</option>
                    <option value={18}>Science: Computers</option>
                    <option value={19}>Science: Mathematics</option>
                    <option value={30}>Science: Gadgets</option>
                    <option value={20}>Mythology</option>
                    <option value={21}>Sports</option>
                    <option value={22}>Geography</option>
                    <option value={23}>History</option>
                    <option value={24}>Politics</option>
                    <option value={25}>Art</option>
                    <option value={26}>Celebreties</option>
                    <option value={27}>Animals</option>
                    <option value={28}>Vehicles</option>       
                </select>
                <h3>Difficulty: </h3>
                <select name="difficulty" onChange={(event: any) => setDifficulty(event.target.value)}>
                    <option value={""}>Any Difficulty</option>
                    <option value={"easy"}>Easy</option>
                    <option value={"medium"}>Medium</option>
                    <option value={"hard"}>Hard</option>
                </select>
                <button id={styles.button} onClick={startGameHandler}>Start Game</button>
            </Card>
        </>
    );
}