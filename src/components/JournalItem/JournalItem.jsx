import './JournalItem.css';

export const JournalItem = () => {

	const title = 'Подготовка и обновление курса';
	const date = new Date();
	const text = 'Горные походы открывают удивительные горные ландшафты';

	return (
		<div className="journal-item">
			<h2 className="journal-item__header">{ title }</h2>
			<div className="journal-item__body">
				<div className="journal-item__date">{ date.toLocaleString() }</div>
				<div className="journal-item__text">{ text }</div>
			</div>

		</div>
	);
};