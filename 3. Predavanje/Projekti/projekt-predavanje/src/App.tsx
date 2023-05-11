import { useEffect, useState } from "react";
import "./App.css";
import Prikaz from "./components/Prikaz/Prikaz";
 
import TemaContext from "./kontekst";
 
export default function App() {
  const [tema, postaviTemu] = useState("light")
 
  function promjenaTeme(){
    postaviTemu(tema == "light" ? "dark" : "light")
  }
 
  return (
    <div>
      <Naslov />
      <TemaContext.Provider value={tema}>
        <GlavnaKomponenta />
      </TemaContext.Provider>
      <button onClick={promjenaTeme}>Light/Dark</button>
      <Footer />
    </div>
  );
}

//useState
/**
 * 
 * export default function App() {
  const [brojac, postaviBrojac] = useState(0)
 
  function uvecajBrojac(){
    postaviBrojac(trenutnoStanje => trenutnoStanje + 1)
    postaviBrojac((trenutnoStanje) => { return trenutnoStanje + 1})
    postaviBrojac(br => br + 1)
  }
 
  return (
    <div>
      <p>Broj: {brojac}</p>
      <button onClick={uvecajBrojac}>+</button>
    </div>
  )
}
*/
//useRef - 1
/**
 * export default function App() {
  const [stateBrojac, postaviBrojac] = useState(0)
  const refBrojac = useRef(0)
 
  function uvecajRef(){
    refBrojac.current = refBrojac.current + 1;
    console.log("Uvećali smo brojač!")
  }
 
  function uvecajState(){
    postaviBrojac(b => b + 1)
  }
 
  return (
    <div>
      <p>Ref brojač: {refBrojac.current}</p>
      <button onClick={uvecajRef}>+</button>
      <p>State brojač: {stateBrojac}</p>
      <button onClick={uvecajState}>+</button> 
    </div>
  )
}
 */
//useRef - 2
/**
 * export default function App() {
  const prva = useRef();
  const zadnja = useRef();
 
  function naPrvu() {
    //zanemari error, radi kako triba
    prva.current.scrollIntoView({behavior: "smooth"});
  }

  function naZadnju() {
    zadnja.current.scrollIntoView({behavior: "smooth"});
  }
 
  return (
    <div className="main">
      <div className="kontrole">
        <button onClick={naPrvu}>Prva</button>
        <button onClick={naZadnju}>Zadnja</button>
      </div>
      <div className="okvir">
        <img src='https://http.cat/204' onClick={naPrvu} alt='No Content' ref={prva}/>
        <img src='https://http.cat/401' alt='Unauthorized' />
        <img src='https://http.cat/404' alt='Not Found' />
        <img src='https://http.cat/409' alt='Conflict' />
        <img src='https://http.cat/413' onClick={naZadnju} alt='Payload Too Large' ref={zadnja} />
      </div>  
    </div>
  );
}
 */
//useEffect
/**
 *  
export default function App() {
 
  const [osoba, postaviOsobu] = useState({
    ime: " ...učitavanje",
    godine: " ...učitavanje"
  });  
 
  useEffect(() => {
    ucitajPodatke().then(rez => {
      postaviOsobu(rez);
    });
  }, []);
 
  return (
    <div className='main'>
      <p>Ime: {osoba.ime}</p>
      <p>Godine: {osoba.godine}</p>
    </div>
  );
}
 */
//useContext
/**
 * export default function App() {
  const [tema, postaviTemu] = useState("light")
 
  function promjenaTeme(){
    postaviTemu(tema == "light" ? "dark" : "light")
  }
 
  return (
    <div>
      <Naslov />
      <TemaContext.Provider value={tema}>
        <GlavnaKomponenta />
      </TemaContext.Provider>
      <button onClick={promjenaTeme}>Light/Dark</button>
      <Footer />
    </div>
  );
}
 */