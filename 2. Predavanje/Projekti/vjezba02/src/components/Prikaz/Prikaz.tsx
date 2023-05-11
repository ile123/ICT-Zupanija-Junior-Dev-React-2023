import styles from './Prikaz.module.css'

export default function Prikaz(props: any) {
    return (
        <div className={styles.prikazBroja}>
          <p>{props.broj}</p>
        </div>
      );
}