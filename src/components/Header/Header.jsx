import styles from './Header.module.css';

export const Header = () => {

	const handleChangeUser = (evt) => {
		console.log(evt.target.value);
	};

	return (
		<div className="header">
			<img src="/public/pj.svg" alt="Logo" className={styles.logo} />
			<select name="user" id="user" onChange={handleChangeUser}>
				<option value="1">Sergei</option>
				<option value="2">Anna</option>
			</select>
		</div>
	);
};