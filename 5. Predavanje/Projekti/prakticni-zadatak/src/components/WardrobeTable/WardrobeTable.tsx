import { Card } from 'react-bootstrap';
import styles from './WardrobeTable.module.css'
import WardrobeTableRow from '../WardrobeTableRow/WardrobeTableRow';
import axios from 'axios';

export default function WardrobeTable(props: any) {
    const wardrobe = props.chlothes;

    const deleteHandler = (data: any) => {
        props.onDeleteHandler(data);
    }

    const updateHandler = (id: any) => {
        props.onUpdateHandler(id);
    }

    return(
        <>
        <Card id={styles.card}>
        {wardrobe.length === 0 && <p id={styles.emptyList}>No chlothes found!</p>}
        {wardrobe.length > 0 &&
            <table id={styles.table}>
                <thead>
                <tr>
                    <th>Vrsta</th>
                    <th>Veličina</th>
                    <th>Boja</th>
                    <th>Slika</th>
                    <th>Datum kupnje</th>
                    <th>Opcije</th>
                </tr>
                </thead>
                <tbody>
                    {wardrobe.map((chlothe: any, index: any) => (
                        <WardrobeTableRow key={index}
                            id={chlothe.id}
                            type={chlothe.type} 
                            size={chlothe.size} 
                            color={chlothe.color} 
                            src={chlothe.image}
                            date={chlothe.date} 
                            onDeleteHandler={deleteHandler}
                            onUpdateHandler={updateHandler} />
                    ))}
                </tbody>
            </table>
        }
        </Card>
        </>
    );
}