import { useContext, useEffect, useReducer, useRef } from 'react';
import { Button } from '../Button/Button';

import cn from 'classnames';
import styles from './JournalForm.module.css';
import { INITIAL_STATE, formReducer } from './JournalForm.state';
import { Input } from '../Input/Input';
import { UserContext } from '../../context/user.context';


export const JournalForm = ({ addItem }) => {


	const [ formState, dispatchForm ] = useReducer(formReducer, INITIAL_STATE);
	const { isValid, isFormReadyToSubmit, values } = formState;
	const titleRef = useRef();
	const dateRef = useRef();
	const textRef = useRef();
	const { userId } = useContext(UserContext);




	const handleSubmit = (event) => {
		event.preventDefault();
		dispatchForm({ type: 'SUBMIT' });
	};
	
	
	useEffect( () => {
		if (isFormReadyToSubmit) {
			addItem(values);
			dispatchForm({ type: 'CLEANUP' });
		}
	}, [isFormReadyToSubmit, values, addItem]);

	useEffect( () => {
		dispatchForm({
			type: 'FIELD_CHANGE',
			payload: { 
				name: 'userId',
				value: userId
			}
		});
	}, [userId]);


	useEffect(() => {
		let timerId;
		if (!isValid.title || !isValid.text || !isValid.date) {

			focusError(isValid);

			timerId = setTimeout(() => {
				dispatchForm({ type: 'RESET_VALIDITY'});
			}, 2000);
		}
		return () => { clearTimeout(timerId); };
	}, [isValid]);


	const focusError = (isValid) => {

		switch(true) {
		case !isValid.title:
			titleRef.current.focus();
			break;
		case !isValid.date:
			dateRef.current.focus();
			break;
		case !isValid.text:
			textRef.current.focus();
			break;

		}
		
	};

	const handleChange = (evt) => {
		dispatchForm({ type: 'FIELD_CHANGE', payload: {
			name: evt.target.name,
			value: evt.target.value
		} });

	};
	
	return (

		<form className={styles['journal-form']} onSubmit={handleSubmit}>
			{ userId }
			<Input 
				isValid={isValid.title}
				type="text" value={values.title} onChange={handleChange} name="title" ref={titleRef} appearance={'title'}/>
			<label htmlFor="" className={styles.label}>
				<img src="/calendar.svg" alt="calendar" />
				<span>Дата</span>
				<Input 
					isValid={isValid.date}
					type="date" ref={dateRef} value={values.date} onChange={handleChange} name="date" />
			</label>
			<label htmlFor="" className={styles.label}>
				<img src="/folder.svg" alt="folder" />
				<span>Метки</span>				
				<Input type="text" value={values.tag} name="tag" onChange={handleChange} />
			</label>
			<textarea
				name="text" ref={textRef} id="" cols="30" value={values.text} onChange={handleChange} rows="10" className={
					cn(styles.input, {
						[styles.invalid]: !isValid.text
					})
				}></textarea>
			<Button text={'Save'} className={styles.button}/>
		</form>

		
	);
};