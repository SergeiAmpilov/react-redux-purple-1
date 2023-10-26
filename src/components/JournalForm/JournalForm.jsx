import { useEffect, useReducer } from 'react';
import { Button } from '../Button/Button';

import cn from 'classnames';
import styles from './JournalForm.module.css';
import { INITIAL_STATE, formReducer } from './JournalForm.state';


export const JournalForm = ({ addItem }) => {


	const [ formState, dispatchForm ] = useReducer(formReducer, INITIAL_STATE);
	const { isValid, isFormReadyToSubmit } = formState;




	const handleSubmit = (event) => {
		event.preventDefault();

		const formData = new FormData(event.target);
		const formProps = Object.fromEntries(formData);

		dispatchForm({ type: 'SUBMIT', payload: formProps });
		
	};
	
	
	useEffect( () => {
		if (isFormReadyToSubmit) {
			addItem(formState.values);
		}
	}, [isFormReadyToSubmit]);


	useEffect(() => {
		let timerId;
		if (!isValid.title || !isValid.text || !isValid.date) {
			timerId = setTimeout(() => {
				dispatchForm({ type: 'RESET_VALIDITY'});
			}, 2000);
		}
		return () => { clearTimeout(timerId); };
	}, [isValid]);

	
	return (
		<form className={styles['journal-form']} onSubmit={handleSubmit}>
			<input type="text" name="title" className={
				cn(styles.input, styles['input-title'], {
					[styles.invalid]: !isValid.title
				})
			}/>
			<label htmlFor="" className={styles.label}>
				<img src="/calendar.svg" alt="calendar" />
				<span>Дата</span>
				
				<input type="date" name="date" className={
					cn(styles.input, {
						[styles.invalid]: !isValid.date
					})
				}/>
			</label>
			<label htmlFor="" className={styles.label}>
				<img src="/folder.svg" alt="folder" />
				<span>Метки</span>				
				<input type="text" name="tag" className={styles.input} />
			</label>
			<textarea name="text" id="" cols="30" rows="10" className={
				cn(styles.input, {
					[styles.invalid]: !isValid.text
				})
			}></textarea>
			<Button text={'Save'} className={styles.button}/>

		</form>
		
	);
};