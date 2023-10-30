import styles from './Logo.module.css';

import { memo } from 'react';


function Logo({ image, ...props}) {
	return (
		<img 
			{...props}
			src={image}
			alt="Logo"
			className={styles.logo}
		/>
	);
}


export default memo(Logo);