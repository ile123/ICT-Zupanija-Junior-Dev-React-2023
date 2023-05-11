import styles from './MatchScore.module.css'
import ClubEmblem from '../ClubEmblem/ClubEmblem'

export default function MatchScore(props: any) {
    return(
        <div className={styles.row}>
            <div className={styles.column}>
                <ClubEmblem src={"https://seeklogo.com/images/H/hajduk-split-logo-369F20A13A-seeklogo.com.jpg?v=637890095480000000"}
                    alt={"Hajduk"} />
            </div>
            <div className={styles.column}>
                <p>{props.firstTeamGoals} : {props.secondTeamGoals}</p>
            </div>
            <div className={styles.column}>
                <ClubEmblem src={"https://seeklogo.com/images/D/Dinamo_Zagreb-logo-8D08117FA5-seeklogo.com.png"}
                    alt={"Dinamo"} />
            </div>
        </div>
    );
}