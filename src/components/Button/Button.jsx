import './Button.css';
import cn from 'classnames';

export const Button = ({ className, text }) => {

	return (
		<button className={cn(className, 'button accent')}>
			{ text }
		</button>
	);
};
