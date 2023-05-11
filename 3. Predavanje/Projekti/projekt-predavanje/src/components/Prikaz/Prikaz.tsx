import styles from './Prikaz.module.css'
import {useEffect} from "react"
 
export default function Prikaz(props: any) {
 
    useEffect(() => {
        const pritisak = () => alert("Klik");
        window.addEventListener("keyup", pritisak);
     
        return () => {
          window.removeEventListener("keyup", pritisak)
        }
      });
  
  return (
    <div>
      <p>Broj: {props.broj}</p>      
    </div>
  );
}