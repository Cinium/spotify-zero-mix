import { DAILY_MIXES, NEW_DAILY_MIX, ZERO_MIX } from '../types';

function playlistsReducer(state = {}, action) {
	switch (action.type) {
		case DAILY_MIXES:
			return {
				...state,
				dailyMixes: action.payload,
			};
		case ZERO_MIX:
			return {
				...state,
				zeroMix: action.payload,
			};
		case NEW_DAILY_MIX:
			return {
				...state,
				newDailyMix: action.payload,
			};
		default:
			return state;
	}
}

export default playlistsReducer;
