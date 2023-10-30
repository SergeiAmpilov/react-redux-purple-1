import { useState } from 'react';
import { Button } from '../Button/Button';
import { SelectUser } from '../SelectUser/SelectUser';
import styles from './Header.module.css';

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
			<img src={logos[logoIndex]} alt="Logo" className={styles.logo} />
			<SelectUser />
			<Button text={'ReactDOM'} onClick={toggleLogo} />
		</div>
	);
};