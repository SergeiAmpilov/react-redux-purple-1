
export const INITIAL_STATE = {
	isValid: {
		text: true,
		title: true,
		date: true
	},
	values: {
		text: '',
		title: '',
		date: '',
		tag: ''
	},
	isFormReadyToSubmit: false
};


export const formReducer = (previousState, action) => {

	switch(action.type) {
	case 'RESET_VALIDITY':
		return {...previousState,	isValid: INITIAL_STATE.isValid};
		

	case 'SUBMIT': {
		const titleValidity = previousState.values.title.trim().length;
		const textValidity  = previousState.values.text.trim().length;
		const dateValidity  = previousState.values.date;

		return {
			...previousState,
			isValid: {
				text: textValidity,
				title: titleValidity,
				date: dateValidity
			},
			isFormReadyToSubmit: titleValidity && textValidity && dateValidity
		};
	}

	case 'FIELD_CHANGE': {
		return {
			...previousState,
			values: {
				...previousState.values,
				[action.payload.name]: action.payload.value
			}
		};
	}

	case 'CLEANUP':
		return INITIAL_STATE;
	}

};