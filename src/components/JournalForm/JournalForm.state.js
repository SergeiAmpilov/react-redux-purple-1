
export const INITIAL_STATE = {
	isValid: {
		text: true,
		title: true,
		date: true
	},
	values: {
		text: undefined,
		title: undefined,
		date: undefined
	},
	isFormReadyToSubmit: false
};


export const formReducer = (previousState, action) => {

	switch(action.type) {
	case 'RESET_VALIDITY':
		return {...previousState,	isValid: INITIAL_STATE.isValid};
		

	case 'SUBMIT': {
		const titleValidity = action.payload.title.trim().length;
		const textValidity = action.payload.text.trim().length;
		const dateValidity = action.payload.date;

		return {
			values: action.payload,
			isValid: {
				text: textValidity,
				title: titleValidity,
				date: dateValidity
			},
			isFormReadyToSubmit: titleValidity && textValidity && dateValidity
		};
	}
	}

};