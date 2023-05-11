import styles from './PersonItem.module.css'

export default function PersonItem(props: any) {
    return(
        <div>
            <p>Osoba: {props.name}</p>
            <p>Lokacija: {props.craft}</p>
        </div>
    );
}