import './JournalAddButton.css';

import { CardButton } from '../CardButton/CardButton';

export const JournalAddButton = ({ children }) => {
	return (
		<CardButton>
			{ children }
		</CardButton>
	);
};