import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "styled-components";
import WardrobeManager from './components/WardrobeManager/WardrobeManager';

const Title = styles.div`
  margin-top: 2rem;
  margin-left: auto;
  margin-right: auto;
  padding-top: 0.5em;
  font-size: 1.5em;
  font-style: oblique;
  text-align: center;
  background: aliceblue;
  border: 1px solid blue;
  width: 40rem;
  height: 4rem;
`;

function App() {
//json-server --watch public/data/data.json --port 3001
  return (
    <div className="App">
      <Title>Moja Garderoba</Title>
      <WardrobeManager />
    </div>
  )
}

export default App
