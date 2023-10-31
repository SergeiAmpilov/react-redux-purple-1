import { useCallback, useState } from 'react';
import { SelectUser } from '../SelectUser/SelectUser';
import Logo from '../Logo/Logo';
import Button from '../Button/Button';

const logos = [
	'/pj.svg', 
	'/vite.svg'
];

export const Header = () => {


	const [logoIndex, setLogoIndex] = useState(0);

	const toggleLogo = useCallback(() => {
		setLogoIndex( old => old ? 0 : 1);
		console.log(logoIndex);
	}, [ logoIndex ]);

	return (
		<div className="header">
			<Logo	image={logos[logoIndex]} />
			<SelectUser />
			<Button text={'ReactDOM'} onClick={toggleLogo} />
		</div>
	);
};