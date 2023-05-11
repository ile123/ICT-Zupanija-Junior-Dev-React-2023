import styles from './Brisanje.module.css'
import { useState } from 'react';
import axios from 'axios';

export default function Brisanje(props: any) {
    const [idPodatka, postaviId] = useState(0);
   
    async function brisiPodatak() {
        await axios.delete(`http://localhost:3001/rezervacije/${idPodatka}`);   
        props.promjena((stanje: any) => stanje.filter((el:any) => el.id != idPodatka));
    }

    return (
      <div>
        <h2>Brisanje podataka</h2>
        <div>
          <label>
            Unesite ID podatka:
            <input
              type='number'
              name='id'
              value={idPodatka}
              onChange={(e:any) => postaviId(e.target.value)}
            />
          </label>
        </div>
        <button onClick={brisiPodatak}>Obriši rezervaciju</button>
      </div>
    );
}
