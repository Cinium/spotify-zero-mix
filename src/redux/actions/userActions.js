import spotifyApi from '../../utils/spotifyApi';
import { SET_CURRENT_USER, SET_TOKEN } from '../types';

export function fetchUserInfo() {
	return async dispatch => {
		try {
			const res = await spotifyApi.getUserInfo();
			localStorage.setItem('user', JSON.stringify(res))
			dispatch({ type: SET_CURRENT_USER, payload: res });
		} catch (e) {
			console.log(e)
		}
	};
}

export function setCurrentUser(user) {
	return {
		type: SET_CURRENT_USER,
		payload: user,
	};
}

export function setToken(token) {
	return {
		type: SET_TOKEN,
		payload: token,
	};
}
