import spotifyApi from '../../utils/spotifyApi';
import { DAILY_MIXES, NEW_DAILY_MIX, TRACKS, ZERO_MIX } from '../types';

export function getDailies() {
	return async dispatch => {
		try {
			const playlists = await spotifyApi.getPlaylists();
			const existingZeroMix = playlists.find(
				item => item.name === 'Микс дня #0'
			);
			const dailyMixes = playlists.filter(playlist => {
				const imagesArr = playlist.images[0];
				if (!imagesArr) return false;
				const imageUrl = imagesArr.url;
				if (imageUrl === undefined) return false;
				return imageUrl.substring(8, 16) === 'dailymix';
			});

			dispatch({ type: ZERO_MIX, payload: existingZeroMix });
			dispatch({ type: DAILY_MIXES, payload: dailyMixes });
		} catch (e) {
			console.log(e);
		}
	};
}

export function getTracks() {
	return async (dispatch, getState) => {
		const { dailyMixes } = getState().playlists;
		let tracks = [];
		for (const playlist of dailyMixes) {
			const items = await spotifyApi.getPlaylistItems(playlist.id);
			tracks = tracks.concat(items);
		}
		dispatch({
			type: TRACKS,
			payload: tracks,
		});
	};
}

export function createPlaylist() {
	return async (dispatch, getState) => {
		const { zeroMix } = getState().playlists;
		const user = getState().user;

		if (zeroMix === undefined) {
			const playlist = await spotifyApi.createPlaylist(user.id);
			dispatch({
				type: NEW_DAILY_MIX,
				payload: playlist,
			});
		} else {
			dispatch({
				type: NEW_DAILY_MIX,
				payload: zeroMix,
			});
		}
	};
}

export function setZeroMix(mix) {
	return {
		type: ZERO_MIX,
		payload: mix,
	};
}

export function setDailyMixes(dailies) {
	return {
		type: DAILY_MIXES,
		payload: dailies,
	};
}

export function setTracksFromDailies(tracks) {
	return {
		type: TRACKS,
		payload: tracks,
	};
}

export function setNewZeroMix(mix) {
	return {
		type: NEW_DAILY_MIX,
		payload: mix,
	};
}
