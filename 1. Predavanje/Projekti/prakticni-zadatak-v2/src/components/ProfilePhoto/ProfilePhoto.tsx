import styles from './ProfilePhoto.module.css'

export default function ProfilePhoto() {
    return (
        <>
            <h1 id={styles.name}>ILARIO BATISTIĆ</h1>
            <img src="https://xsgames.co/randomusers/assets/avatars/male/70.jpg" alt="randomFace" id={styles.photo} />
        </>
    );
}