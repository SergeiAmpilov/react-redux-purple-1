import './Button.css';
import cn from 'classnames';

export const Button = ({ className, text, ...props }) => {

	return (
		<button 
			className={cn(className, 'button accent')}
			{...props}
		>
			{ text }
		</button>
	);
};
