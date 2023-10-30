import './Button.css';
import cn from 'classnames';
import { memo } from 'react';

const Button = ({ className, text, ...props }) => {

	console.log('button');

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