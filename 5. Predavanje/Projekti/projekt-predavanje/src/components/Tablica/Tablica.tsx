import styles from './Tablica.module.css'
import RedakTablice from '../RedakTablice/RedatkTablice';

export default function Tablica({ rezervacije }: any) {
    return (
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Ime</th>
            <th>Prezime</th>
            <th>Polazište</th>
            <th>Odredište</th>
            <th>Klasa</th>
          </tr>
        </thead>
        <tbody>
          {rezervacije.map((r: any) => (
            <RedakTablice key={r.id} rez={r} />
          ))}
        </tbody>
      </table>
    );
  }