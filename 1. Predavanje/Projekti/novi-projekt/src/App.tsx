import './App.css';
import Pozdrav from './components/pozdrav/Pozdrav';
import Pozdrav2 from './components/pozdrav2/Pozdrav2'
//ovo je Typescript + SWC
export default function App() {

  const date = new Date();
  const a = 20;
  const b = 30;

  //console.log("Hello World!");

  return (
    //<> je isto kao <Fragment>
    <>
      <p>Dobro dosli u EDIT React Junior Dev!</p>
      <p>Trenutacno vrijeme: {date.toString()}</p>
      <p>Broj 1: {a}</p>
      <p>Broj 2: {b}</p>
      <p className="izracun">Rezultat zbrajanja: {a + b}</p>
      <Pozdrav name={"Ante"} age={21} />
      <Pozdrav name={"Mate"} age={22} />
      <Pozdrav name={"Jure"} age={23} />
      <Pozdrav2>
        <p>Ovo je child od Pozdrav2</p>
      </Pozdrav2>
    </>
  );
}