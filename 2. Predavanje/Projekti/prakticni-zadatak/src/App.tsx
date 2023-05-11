import './App.css'
import ScoreCard from './components/ScoreCard/ScoreCard'
import 'bootstrap/dist/css/bootstrap.min.css';
import MinuteCounter from './components/MinuteCounter/MinuteCounter'

export default function App() {

  return (
    <div>
        <ScoreCard />
        <MinuteCounter />
    </div>
  );
}
