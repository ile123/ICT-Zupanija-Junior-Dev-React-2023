
export default function Pozdrav(props) {

    const yearOfBirth = () => {
        return new Date().getFullYear() - props.age;
      };

    return (
        <>
            <p>Pozdrav Brate {props.name}, imas {props.age} godina! Roden si {yearOfBirth()}. godine! Ovo je funkcijska komponenta.</p>
        </>
    );
}