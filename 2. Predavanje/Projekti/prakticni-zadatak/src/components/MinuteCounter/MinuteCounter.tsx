import { useState } from 'react';
import Button from "../Button/Button";
import { Card } from 'react-bootstrap';
import styles from './MinuteCounter.module.css'

export default function MinuteCounter() {
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const incrementMinuteHandler = () => {
        if(minutes != 90) {
            setMinutes(minutes + 1);
        }
    }

    const decrementMinuteHandler = () => {
        if(minutes != 0) {
            setMinutes(minutes - 1);
        }
    }

    const incrementSecondHandler = () => {
        if(seconds + 1 == 60) {
            setMinutes(minutes + 1);
            setSeconds(0);
        } else {
            setSeconds(seconds + 1);
        }
    }

    const decrementSecondHandler = () => {
        if(seconds != 0) {
            setSeconds(seconds - 1);
        }
    }

    const resetTimerHandler = () => {
        setMinutes(0);
        setSeconds(0);
    }

    return(
    <>
        <Card id={styles.card}>
            <h1>{minutes} : {seconds}</h1>
            <div className={styles.row}>
                <Button onButtonClick={incrementMinuteHandler}>+</Button>
                <Button onButtonClick={decrementMinuteHandler}>-</Button>
                <Button onButtonClick={incrementSecondHandler}>+</Button>
                <Button onButtonClick={decrementSecondHandler}>-</Button>
                <Button onButtonClick={resetTimerHandler}>Reset</Button>
            </div>
        </Card>
    </>
    );
}