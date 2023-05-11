import styles from './UnosForma.module.css'
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function UnosForma(props: any) {
    const [gradovi, postaviGradove] = useState([]);
    const [klase, postaviKlase] = useState([])
    const [formaPodaci, postaviPodatke] = useState({
        ime: "",
        prezime: "",
        dob: "",
        pocetak: "",
        kraj: "",
        klasa: "",
      });
     
      const saljiPodatke = (event: any) => {
        event.preventDefault();
        console.log(formaPodaci);
       
        const zaSlanje = obradiPodatke(formaPodaci);
        
        axios.post("http://localhost:3001/rezervacije", zaSlanje)
            .then(rez => {
                axios.get("http://localhost:3001/rezervacije")
                .then(rez => props.dodaj(rez.data));
            });
      }

      const promjenaUlaza = (event: any) => {
        const { name, value } = event.target;
        postaviPodatke({ ...formaPodaci, [name]: value });
      }

      const obradiPodatke = (objekt: any) => {
        return {
          "osoba" : {
            "ime" : objekt.ime,
            "prezime": objekt.prezime,
            "dob": Number(objekt.dob)
          },
          "karta":{
            "pocetak": objekt.pocetak,
            "kraj": objekt.kraj,
            "klasa": objekt.klasa
          }
        }
      }

      useEffect(() => {
        Promise.all([
          axios.get("http://localhost:3001/gradovi"),
          axios.get("http://localhost:3001/klase"),
        ])
          .then(([rezGradovi, rezKlase]) => {
            postaviGradove(rezGradovi.data);
            postaviKlase(rezKlase.data);
          })
          .catch(err => console.log(err.message));
      }, []);
     
      return (
        <form onSubmit={saljiPodatke}>
            <div>
                <label>
                    Ime:
                    <input
                    type='text'
                    name='ime'
                    value={formaPodaci.ime}
                    onChange={promjenaUlaza}
                    required
                    />
                </label>
            </div>
            <div>
                <label>
                Prezime:
                <input type='text' name='prezime' value={formaPodaci.prezime}
                    onChange={promjenaUlaza} required />
                </label>
            </div>
            <div>
                <label>
                Godina:
                <input type='number' name='dob' value={formaPodaci.dob}
                    onChange={promjenaUlaza} required/>
                </label>
            </div>
            <div>
                <label>
                    Početak putovanja:
                    <select
                    name='pocetak'
                    value={formaPodaci.pocetak}
                    onChange={promjenaUlaza}
                    required
                    >
                    <option value=''>--Odaberi grad--</option>
                    {gradovi.map(grad => (
                        <option key={grad} value={grad}>
                        {grad}
                        </option>
                    ))}
                    </select>
                </label>
            </div>
            <div>
                <label>
                    Početak putovanja:
                    <select
                    name='kraj'
                    value={formaPodaci.kraj}
                    onChange={promjenaUlaza}
                    required
                    >
                    <option value=''>--Odaberi grad--</option>
                    {gradovi.map(grad => (
                        <option key={grad} value={grad}>
                        {grad}
                        </option>
                    ))}
                    </select>
                </label>
            </div>
            <div>
                <label>
                    Klasa:
                    {klase.map((klasa: any) => (
                    <label key={klasa.oznaka}>
                        <input
                        type='radio'
                        name='klasa'
                        value={klasa.oznaka}
                        checked={formaPodaci.klasa === klasa.oznaka}
                        onChange={promjenaUlaza}
                        required
                        />{" "}
                        {klasa.ime}
                    </label>
                    ))}
                </label>
            </div>
          <button type='submit'>Nova rezervacija</button>
        </form>
      );
}