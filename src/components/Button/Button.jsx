import './Button.css';

export const Button = () => {

	const handleClick = () => {
		console.log('hw');
	};

	return (
		<button onClick={handleClick} className='button accent'>
			button
		</button>
	);
};
