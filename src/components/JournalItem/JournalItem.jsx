import './JournalItem.css';

export const JournalItem = ({ title, date, text}) => {

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