import styles from './Header.module.css';

export const Header = () => {
	return (
		<div className="header">
			<img src="/public/pj.svg" alt="Logo" className={styles.logo} />
		</div>
	);
};