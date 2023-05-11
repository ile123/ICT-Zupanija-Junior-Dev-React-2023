import styles from './Tipka.module.css'
import { useContext } from 'react';
import TemaContext from "./kontekst";
 
function Tipka(props: any) {
  return(
    <TemaContext.Consumer>
      { tema => <button className={styles[tema]} onClick={() => props.klik}>{props.natpis}</button> }
    </TemaContext.Consumer>
  ) 
}