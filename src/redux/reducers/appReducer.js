import { IS_LOADING, IS_MOBILE, SUCCESS_MESSAGE } from '../types';

const initialState = {
	isLoading: false,
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
				successMessage: action.payload
			}
		default:
			return state;
	}
}

export default appReducer;
