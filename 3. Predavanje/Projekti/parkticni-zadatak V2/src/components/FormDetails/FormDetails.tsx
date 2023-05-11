import { Card } from 'react-bootstrap';
import styles from './FormDetails.module.css'

export default function FormDetails(props: any) {
    return(
        <>
            <Card id={styles.card}>
                <Card.Header id={styles.header}>User Information</Card.Header>
                <Card.Body id={styles.cardBody}>
                    <h2>Email</h2>
                    <h4>{props.userData["email"]}</h4>
                    <h2>Name</h2>
                    <h4>{props.userData["name"]}</h4>
                    <h2>Country</h2>
                    <h4>{props.userData["country"]}</h4>
                    <h2>Address</h2>
                    <h4>{props.userData["address"]}</h4>
                    <h2>Payment</h2>
                    <h4>{props.userData["payment"]}</h4>
                </Card.Body>
            </Card>
        </>
    );
}