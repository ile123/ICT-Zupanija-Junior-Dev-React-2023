import styles from './Kartica.module.css'

export default function Kartica() {
    return(
        <div>
            <h1>Naslov kartice</h1>
            <p>Tekst kartice</p>
        </div>
    )
}

/**
 * NACIN STILIZIRANJA KOMPONENTE:
 *  1,1.) Inline(V1): 
 *          <h1 style={{color: "red"}}>Naslov kartice</h1>
            <p style={{textDecoration: "underline"}}>Tekst kartice</p>
    1,2.) Inline(V2): 
 *          <h1 style={karticaStilovi.h1Stil}>Naslov kartice</h1>
            <p style={karticaStilovi.pStil}>Tekst kartice</p>

            const h1Stil = {
                color: "red",
                fontSize: 22,
                border: "1px solid black"
            }
        
            const pStil = {
                textDecoration: "underline",
                padding: "20px 15px",
                backgroundColor: "#ccc"
            }
    1,3.) Inline(V3): 
 *          <h1 style={karticaStilovi.h1Stil}>Naslov kartice</h1>
            <p style={karticaStilovi.pStil}>Tekst kartice</p>

            const karticaStilovi = {
                h1Stil: {
                    color: "red",
                    fontSize: 22,
                    border: "1px solid black",
                },
                pStil: {
                    textDecoration: "underline",
                    padding: "20px 15px",
                    backgroundColor: "#ccc",
                },
            };
    2.) CSS Moduli:
            <h1 className={styles.naslov}>Naslov kartice</h1>
            <p className={styles["odlomak"]}>Tekst kartice</p>
    3,1) Stilizirane kopmponente(staticne)(prvo instalirak package(npm install styled-components)) -> ZA OTVORIT OVE NAVODNIKE PRITSINI ALT GR + 7:
            <div>
                <Naslov>Naslov kartice</Naslov>
                <p>Tekst kartice</p>
            </div>

            const Naslov = styled.h1`
                color: red;
                font-size: 22px;
                border: 1px solid black
            `
    3,2) Stilizirane komponente(dinamicne):
            <div>
                <Naslov>Naslov kartice</Naslov>
                <Odlomak velicina={17}>Tekst kartice</Odlomak>
                <Button>Klik</Button>
                <Button rozi>Klik</Button>
            </div>
 *          
            const Button = styled.button`
                font-size: 1em;
                margin: 1em;
                padding: 0.25em 1em;
                border: 2px solid tomato;
                border-radius: 3px;
                background: ${props => props.rozi ? "salmon" : "white"};
            `

            const Odlomak = styled.p`
                text-decoration: underline;
                padding: 20px 15px;
                background-color: #ccc;
                font-size: ${props => props.velicina}px;
            `
    3,3) Atributi elementa:
            <Naslov>Naslov kartice</Naslov>
            <Odlomak velicina={17}>Broj kartice: {broj}</Odlomak>
            <Button rozi onClick={() => postaviBroj(broj + 1)}>Uvećaj</Button>
 */