
export default function Zadatak(props: any) {
    if (props.gotov) {
        return <p>{props.natpis} ✅</p>;
      }
      return (
        <p>{props.natpis} 🕓🔄</p>
      );
}