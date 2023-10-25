import styles from './Body.module.css';

export const Body = ({ children }) => {
	return (
		<div className={styles.body}>
			{ children }
		</div>
	);
};