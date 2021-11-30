import { SET_CURRENT_USER } from "../types";

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { user } : {};

function userReducer(state = initialState, action) {
	switch(action.type) {
		case SET_CURRENT_USER:
			return {
				...state,
				user: action.payload
			};
		default:
			return state
	}
}

export default userReducer;