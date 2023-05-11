import { useEffect, useState } from 'react'
import axios from 'axios'
import PersonItem from './components/PersonItem/PersonItem';
import './App.css'
export default function App() {

  const [podatak, setPodatak] = useState([]);

  function dohvatiPodatke() {
    axios.get("https://api.open-notify.org/astros.json")
      .then(res => setPodatak(res.data.people))
      .catch(err => alert(err))
  }

  /*let obecanje = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Gotovo"), 1000)
  });

  obecanje.then(rezultat => {
    console.log(rezultat)
  });
  */

  /*
    let obecanje = new Promise((resolve, reject) => {
      setTimeout(() => reject("Greška!"), 1000)
    })
 
    obecanje.then(rez => console.log(rez)).catch(err => console.log(err))
  */

    /*
    obecanje
  .then(rez => {
    console.log(rez)
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve("Drugi!"), 1000)
    })
  })
  .then(rez => {
    console.log(rez)
  })
    */


  /*
    function dohvatiPodatke() {

    const url = 'https://jsonplaceholder.typicode.com/posts/' + id;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setPodatak(data));

  }
  */
 /* 
   useEffect(() => {
    dohvatiPodatke()
  }, [id]);
 */
 //<button onClick={dohvatiPodatke}>Dohvati Podatke</button> <input type="number" min={1} max={100} value={id} id='broj' onChange={idPromjena} />
 //const [id, postaviId] = useState(1);
 /*
 function idPromjena(e: any) {
    const value = e.target.value;
    if(value > 0 && value < 100) {
      postaviId(value);
    }
  }
 */
  return (
    <div className="App">
        <h1>Pozdrav React!</h1>
        <button onClick={dohvatiPodatke}>Dohvati Podatke</button>
        {podatak.map(el => {
          <PersonItem name={el.name} craft={el.craft} />
        })}
    </div>
  )
}