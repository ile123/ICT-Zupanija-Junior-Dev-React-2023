import styles from './Sposobnost.module.css'
import { Card } from 'react-bootstrap';
import {ProgressBar} from 'react-bootstrap'

export default function Sposobnost() {
    return (
        <>
            <Card id={styles.card}>
                <Card.Header id={styles.header}><h1>Sposobnosti</h1></Card.Header>
                <Card.Body>
                    <p className={styles.paragraph}><b>PROGRAMIRANJE</b></p>
                    <ProgressBar striped variant="warning" now={85} animated/>
                    <p className={styles.paragraph}><b>CSS</b></p>
                    <ProgressBar striped variant="warning" now={5} animated/>
                    <p className={styles.paragraph}><b>BOKS</b></p>
                    <ProgressBar striped variant="warning" now={60} animated/>
                    <p className={styles.paragraph}><b>NERADENJE ZADANIH ZADATAKA</b></p>
                    <ProgressBar striped variant="warning" now={100} animated/>
                    <p className={styles.paragraph}><b>NEDAMI SE NABRAJAT DALJE</b></p>
                    <ProgressBar striped variant="warning" now={100} animated/>
                </Card.Body>
            </Card>
        </>
    );
}