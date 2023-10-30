import { useState } from 'react';
import { Button } from '../Button/Button';
import { SelectUser } from '../SelectUser/SelectUser';
import { Logo } from '../Logo/Logo';

const logos = [
	'/pj.svg', 
	'/vite.svg'
];

export const Header = () => {


	const [logoIndex, setLogoIndex] = useState(0);

	const toggleLogo = () => {
		setLogoIndex( logoIndex ? 0 : 1);
	};

	return (
		<div className="header">
			<Logo	image={logos[logoIndex]} />
			<SelectUser />
			<Button text={'ReactDOM'} onClick={toggleLogo} />
		</div>
	);
};