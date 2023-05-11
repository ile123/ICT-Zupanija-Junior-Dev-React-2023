import './App.css'
import { useState } from 'react';
import Zadatak from './components/Zadatak/Zadatak'

export default function App() {
 
  const [broj, postaviBroj] = useState(5);

  function uvecajBrojac() {
    postaviBroj(broj + 1);
  }

  setTimeout(uvecajBrojac, 1500);
 
  return (
    <div>
      <h2>Popis zadataka:</h2>
      <Zadatak natpis="Zaliti cvijeće" gotov={true} />
      <Zadatak natpis="Kupiti kruh" gotov={false} />
      <Zadatak natpis="Upisati React tečaj" gotov={true} />
    </div>
  );
}

/*

//1.

function trosiVrijeme(){
  for (let i = 0; i < 1000000000; i ++){
    if (i % 10000000 == 0){
      console.log("Poruka")
    }
  }
}
 
function App() {
  const [brojaci, postaviBrojace] = useState({prvi: 5, drugi: 10});
 
  function uvecajPrvi(){
  const novi = {
    prvi: brojaci.prvi + 1,
    drugi: brojaci.drugi
  }
  postaviBrojace(novi)
}
 
  function uvecajDrugi(){
    let novi = {...brojaci}
    novi.drugi += 1
  postaviBrojace(novi)
  }
 
  return (
    <div>
      <p>Vrijednost prvog broja: {brojaci.prvi}</p>
      <button onClick={uvecajPrvi}>Uvećaj prvi</button>
      <p>Vrijednost drugog broja: {brojaci.drugi}</p>
      <button onClick={uvecajDrugi}>Uvećaj drugi</button>
    </div>
  );
}
*/

/*
//2.
import "./App.css";
import { useState } from "react";
 
import Prikaz from "./components/Prikaz";
import Tipka from "./components/Tipka";
 
function App() {
  const [broj, postaviBroj] = useState(5);
 
  const umanjiBroj = () => {
    postaviBroj(broj - 1);
  }
  return (
    <div>
      <Prikaz broj={broj} />
      <div>
        <Tipka natpis='-' akcija={umanjiBroj} />
        <Tipka natpis="0" akcija={() => postaviBroj(0)} />
      </div>
    </div>
  );
}
 
export default App;
*/