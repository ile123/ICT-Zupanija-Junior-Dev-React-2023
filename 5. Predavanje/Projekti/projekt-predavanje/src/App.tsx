import './App.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Tablica from './components/Tablica/Tablica';
import UnosForma from './components/UnosForma/UnosForma';
import Brisanje from './components/Brisanje/Brisanje';
import Promjena from './components/Promjena/Promjena';

export default function App() {
  const [rezervacije, postaviRezervacije] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/rezervacije/")
      .then(res => postaviRezervacije(res.data));
  }, []);

  return (
    <div className='App'>
      <h2>Popis rezervacija</h2>
      <Tablica rezervacije={rezervacije} />
      <h2>Nova rezervacija</h2>
      <UnosForma dodaj={postaviRezervacije} />
      <h2>Brisi podatak: </h2>
      <Brisanje promjena={postaviRezervacije} />
      <h2>Promjeni podatke: </h2>
      <Promjena />
    </div>
  )
}
