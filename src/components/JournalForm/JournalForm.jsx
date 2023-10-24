import { useState } from 'react';
import { Button } from '../Button/Button';

import './JournalForm.css';


export const JournalForm = ({ addItem }) => {

	const [inputData, setInputData] = useState('');
	const [formValidState, setFormValidState] = useState({
		title: true,
		text: true,
		date: true
	});

	const handleInputChange = (event) => {
		setInputData(event.target.value);
		console.log(inputData);
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		const formData = new FormData(event.target);
		const formProps = Object.fromEntries(formData);

		let isFormValid = true;

		if (!formProps.title.trim().length ) {
			setFormValidState((previousState) => {
				return {
					...previousState,
					title: false
				};
			});

			isFormValid = false;
		}

		if (!formProps.text.trim().length ) {
			setFormValidState((previousState) => {
				return {
					...previousState,
					text: false
				};
			});

			isFormValid = false;
		}

		if (!formProps.date ) {
			setFormValidState((previousState) => {
				return {
					...previousState,
					date: false
				};
			});

			isFormValid = false;

		}

		if (!isFormValid) {
			return ;
		}

		


		addItem(formProps);
	};

	
	return (
		<form className='journal-form' onSubmit={handleSubmit}>
			<input type="text" name="title" />
			<input type="date" name="date" />
			<input type="text" name="tag" onChange={handleInputChange} value={inputData} />
			<textarea name="text" id="" cols="30" rows="10"></textarea>
			<Button text={'Save'}/>

		</form>
		
	);
};