import styles from './Tipka.module.css'

function Tipka(props: any){
 
    function handleClick(){
      // Pozivamo iz props-a
      props.akcija()
    }
   
    return(
      <div className={styles.tipkaOkvir}>
        <button onClick={handleClick}>{props.natpis}</button>
      </div>
    )
  }
  export default Tipka