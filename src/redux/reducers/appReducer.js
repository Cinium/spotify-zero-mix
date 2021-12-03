import {
	CURRENT_THEME,
	IS_LOADING,
	IS_MOBILE,
	SUCCESS_MESSAGE,
} from '../types';

const theme = JSON.parse(localStorage.getItem('theme'));

const initialState = {
	isLoading: false,
	theme: theme ? theme : 'purple',
};

function appReducer(state = initialState, action) {
	switch (action.type) {
		case IS_LOADING:
			return {
				...state,
				isLoading: action.payload,
			};
		case IS_MOBILE:
			return {
				...state,
				isMobile: action.payload,
			};
		case SUCCESS_MESSAGE:
			return {
				...state,
				successMessage: action.payload,
			};
		case CURRENT_THEME:
			return {
				...state,
				theme: action.payload,
			};
		default:
			return state;
	}
}

export default appReducer;
