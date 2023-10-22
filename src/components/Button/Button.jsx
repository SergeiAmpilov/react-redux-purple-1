import React from 'react';
import './Button.css';

export const Button = () => {

	const [text, setText] = React.useState('Сохранить');

	const handleClick = () => {
		console.log('hw');
		setText( t => t + '!');
	};

	return (
		<button onClick={handleClick} className='button accent'>
			{ text }
		</button>
	);
};
