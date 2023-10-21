import './App.css';
import { Button } from './components/Button/Button';
import { JournalItem } from './components/JournalItem/JournalItem';

function App() {
  
  return (
    <div className="container">
      <h1>Project</h1>
      <p>subtitle</p>
      <Button />
      <JournalItem />
      <JournalItem />
      <JournalItem />

    </div>
  );

}

export default App;
 