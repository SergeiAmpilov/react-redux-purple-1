import './App.css';
import { Header } from './components/Header/Header';
import { JournalAddButton } from './components/JournalAddButton/JournalAddButton';
import { JournalList } from './components/JournalList/JournalList';
import { Body } from './layouts/Body/Body';
import { LeftPanel } from './layouts/LeftPanel/LeftPanel';
import { JournalForm } from './components/JournalForm/JournalForm';
import { useState, useEffect } from 'react';


function App() {

	const [dataList, setDataList] = useState([]);

	useEffect(() => {
		
		const srcData = JSON.parse(localStorage.getItem('data'));

		if (srcData) {
			setDataList(srcData.map(item => ({
				...item,
				date: new Date(item.date)
			})));
		}

	}, [setDataList]);


	useEffect(() => {
		if (!dataList.length) {
			return;
		}
		const strData = JSON.stringify(dataList);
		localStorage.setItem('data', strData);
	}, [dataList]);

	const handleAddItem = (item) => {
		
		setDataList((oldItems) => {
			return [
				{
					...item,
					date: new Date(item.date),
					id: (oldItems.length ? Math.max(...oldItems.map(el => el.id)) : 0) + 1
				},
				...oldItems
			];
		});
	};

  
	return (
		<>
			<div className="app">
				<LeftPanel>
					<Header />
					<JournalAddButton />
					<JournalList items={dataList} />
				</LeftPanel>
				<Body>
					<JournalForm addItem={handleAddItem} />
				</Body>
			</div>








      

		</>
	);

}

export default App;
 