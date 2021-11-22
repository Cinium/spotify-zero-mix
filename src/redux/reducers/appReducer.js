import { IS_LOADING } from "../types";

const initialState = {
	isLoading: false,
}

function appReducer(state = initialState, action) {
	switch(action.type) {
		case IS_LOADING:
			return {
				...state,
				isLoading: action.payload
			};
		default:
			return state
	}
}

export default appReducer;