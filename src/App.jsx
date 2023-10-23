import './App.css';
import { CardButton } from './components/CardButton/CardButton';
import { Header } from './components/Header/Header';
import { JournalAddButton } from './components/JournalAddButton/JournalAddButton';
import { JournalItem } from './components/JournalItem/JournalItem';
import { JournalList } from './components/JournalList/JournalList';
import { Body } from './layouts/Body/Body';
import { LeftPanel } from './layouts/LeftPanel/LeftPanel';
import { JournalForm } from './components/JournalForm/JournalForm';
import { useState } from 'react';


function App() {


	const data = [
		{
			id: 1,
			title: 'Подготовка и обновление курса',
			date: new Date(),
			text: 'Горные походы открывают удивительные природные ландшафты'
		},
		{
			id: 2,
			title: 'Поход в горы',
			date: new Date(),
			text: 'Горные походы открывают удивительные природные ландшафты'
		},
		{
			id: 3,
			title: 'Сборка рюкзака',
			date: new Date(),
			text: 'Горные походы открывают удивительные природные ландшафты'
		}
	];

	const [dataList, setDataList] = useState(data);

	const handleAddItem = (item) => {
		setDataList(oldItems => [
			{
				...item,
				date: new Date(item.date),
				id: Math.max(oldItems.map(el => el.id)) + 1
			},
			...dataList
		]);
	};

  
	return (
		<>
			<div className="app">
				<LeftPanel>
					<Header />
					<JournalAddButton />
					<JournalList>
						{ 
							dataList.map((element) => (
								<CardButton key={element.id}>
									<JournalItem 
										title={element.title}
										date={element.date}
										text={element.text}
									/>
								</CardButton>
							))
						}
					</JournalList>
				</LeftPanel>
				<Body>
					<JournalForm addItem={handleAddItem} />
				</Body>
			</div>








      

		</>
	);

}

export default App;
 