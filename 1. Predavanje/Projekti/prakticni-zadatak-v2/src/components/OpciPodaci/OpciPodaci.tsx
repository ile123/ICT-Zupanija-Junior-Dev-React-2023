import { Card } from 'react-bootstrap';
import styles from './OpciPodaci.module.css'

export default function OpciPodaci() {
    return(
        <>
            <Card  id={styles.card}>
                <Card.Header><h1 id={styles.header}>Opći Podaci</h1></Card.Header>
                <Card.Body>
                    <p><b>Datum rođenja:</b>5.7.2000</p>
                    <p><b>Adresa:</b>Bunker ispod Iloka</p>
                    <p><b>Kontakt:</b>Pokucaj na vratima</p>
                </Card.Body>
            </Card>
        </>
    );
}
