import styles from './Logo.module.css';


export const Logo = ({ image, ...props}) => {
	return (
		<img 
			{...props}
			src={image}
			alt="Logo"
			className={styles.logo}
		/>
	);
};