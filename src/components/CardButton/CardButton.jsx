import './CardButton.css';


export const CardButton = ({ children, className }) => {
	const cn = `card-button ${className}`;
	return (
		<button className={cn}>
			{ children }
		</button>
	);
};