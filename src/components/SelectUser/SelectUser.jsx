
import { useContext } from 'react';
import { UserContext } from '../../context/user.context';

export const SelectUser = () => {

	const { userId } = useContext(UserContext);

  
	const handleChangeUser = (evt) => {
		console.log(evt.target.value);
	};

	return (
		<select name="user" id="user" value={userId} onChange={handleChangeUser}>
			<option value="1">Sergei</option>
			<option value="2">Anna</option>
		</select>
	);
};