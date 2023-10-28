import './App.css';
import { Header } from './components/Header/Header';
import { JournalAddButton } from './components/JournalAddButton/JournalAddButton';
import { JournalList } from './components/JournalList/JournalList';
import { Body } from './layouts/Body/Body';
import { LeftPanel } from './layouts/LeftPanel/LeftPanel';
import { JournalForm } from './components/JournalForm/JournalForm';
import { useLocalStorage } from './hooks/use-local-storage.hook';


const mapItems = i => ({ 
	...i, 
	date: i.date = new Date(i.date)
});


function App() {

	const [dataList, setDataList] = useLocalStorage('data');

	const handleAddItem = (item) => {
		
		setDataList([
			...dataList.map(mapItems),
			{
				...item,
				date: new Date(item.date),
				id: (dataList.length ? Math.max(...dataList.map(el => el.id)) : 0) + 1
			}
		]);
	};

  
	return (
		<>
			<div className="app">
				<LeftPanel>
					<Header />
					<JournalAddButton />
					<JournalList items={dataList.map(mapItems)} />
				</LeftPanel>
				<Body>
					<JournalForm addItem={handleAddItem} />
				</Body>
			</div>








      

		</>
	);

}

export default App;
 