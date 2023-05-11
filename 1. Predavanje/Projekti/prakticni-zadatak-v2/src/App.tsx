import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ProfilePhoto from './components/ProfilePhoto/ProfilePhoto';
import OpciPodaci from './components/OpciPodaci/OpciPodaci';
import Sposobnost from './components/Sposobnost/Sposobnost';

function App() {

  return (
    <div className="App">
      <ProfilePhoto />
      <OpciPodaci />
      <Sposobnost />
    </div>
  )
}

export default App
