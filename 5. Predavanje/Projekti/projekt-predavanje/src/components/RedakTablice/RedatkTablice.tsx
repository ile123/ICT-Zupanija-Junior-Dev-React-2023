import styles from './RedatkTablice.module.css'

export default function RedakTablice({ rez }: any) {
    return (
      <tr>
        <td>{rez.id}</td>
        <td>{rez.osoba.ime}</td>
        <td>{rez.osoba.prezime}</td>
        <td>{rez.karta.pocetak}</td>
        <td>{rez.karta.kraj}</td>
        <td>{rez.karta.klasa}</td>
      </tr>
    );
  }