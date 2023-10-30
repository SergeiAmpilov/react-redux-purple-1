import './Button.css';
import cn from 'classnames';
import { memo } from 'react';

const Button = ({ className, text, ...props }) => {

	return (
		<button 
			className={cn(className, 'button accent')}
			{...props}
		>
			{ text }
		</button>
	);
};


export default memo(Button);