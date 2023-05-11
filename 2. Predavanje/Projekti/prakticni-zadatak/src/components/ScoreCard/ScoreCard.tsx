import { useState } from "react";
import { Card } from "react-bootstrap";
import Button from "../Button/Button";
import MatchDate from "../MatchDate/MatchDate";
import MatchScore from "../MatchScore/MatchScore";
import styles from './ScoreCard.module.css'

export default function ScoreCard() {
    const [firstTeamGoals, setFirstTeamGoals] = useState(0);
    const [secondTeamGoals, setSecondaTeamGoals] = useState(0);

    const firstTeamGoalsIncrementHandler = () => {
        setFirstTeamGoals(firstTeamGoals + 1);
    }

    const firstTeamGoalsDecrementHandler = () => {
        if(firstTeamGoals != 0) {
            setFirstTeamGoals(firstTeamGoals - 1);
        }
    }

    const secondTeamGoalsIncrementHandler = () => {
        setSecondaTeamGoals(secondTeamGoals + 1);
    }

    const secondTeamGoalsDecrementHandler = () => {
        if(secondTeamGoals != 0) {
            setSecondaTeamGoals(secondTeamGoals - 1);
        }
    }

    const scorerResetHandler = () => {
        setFirstTeamGoals(0);
        setSecondaTeamGoals(0);
    }

    return(
        <>
            <Card id={styles.card}>
                <MatchDate />
                <MatchScore firstTeamGoals={firstTeamGoals} secondTeamGoals={secondTeamGoals}/>
                <div className={styles.row}>
                    <Button onButtonClick={firstTeamGoalsIncrementHandler}>+</Button>
                    <Button onButtonClick={firstTeamGoalsDecrementHandler}>-</Button>
                    <Button onButtonClick={secondTeamGoalsIncrementHandler}>+</Button>
                    <Button onButtonClick={secondTeamGoalsDecrementHandler}>-</Button>
                    <Button onButtonClick={scorerResetHandler}>Reset</Button>
                </div>
            </Card>
        </>
    );
}