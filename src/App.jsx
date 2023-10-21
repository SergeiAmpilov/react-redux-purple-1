import './App.css';
import { Button } from './components/Button/Button';
import { JournalItem } from './components/JournalItem/JournalItem';

function App() {

  const data = [
    {
      title: 'Подготовка и обновление курса',
      date: new Date(),
      text: 'Горные походы открывают удивительные природные ландшафты'
    },
    {
      title: 'Поход в горы',
      date: new Date(),
      text: 'Горные походы открывают удивительные природные ландшафты'
    },
    {
      title: 'Сборка рюкзака',
      date: new Date(),
      text: 'Горные походы открывают удивительные природные ландшафты'
    }
  ];
  
  return (
    <div className="container">
      <h1>Project</h1>
      <p>subtitle</p>
      <Button />
      
      <JournalItem 
        title={data[0].title}
        date={data[0].date}
        text={data[0].text}
      />
      

    </div>
  );

}

export default App;
 