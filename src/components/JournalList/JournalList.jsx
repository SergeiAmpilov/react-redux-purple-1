import { useContext, useMemo } from 'react';
import { CardButton } from '../CardButton/CardButton';
import { JournalItem } from '../JournalItem/JournalItem';
import './JournalList.css';
import { UserContext } from '../../context/user.context';

export const JournalList = ({ items }) => {

	const { userId } = useContext(UserContext);
	
	const sortItems = (a, b) => {
		if (a.date > b.date) {
			return -1;
		}

		return 1;
	};

	const filteredItems = useMemo( () => items
		.filter(el => el.userId == userId )
		.sort(sortItems), [items, userId]);


	if (!items || !items.length) {
		return <>Записей пока нет. Добавьте первую</>;
	}

	return (
		<div className="journal-list">
			{ filteredItems
				.map(
					(element) => (
						<CardButton key={element.id}>
							<JournalItem
								title={element.title}
								date={element.date}
								text={element.text}
							/>
						</CardButton>
					)
				) }
		</div>
	);
};