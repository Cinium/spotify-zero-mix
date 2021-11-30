import auth from '../auth/auth';
import { setIsLoading } from '../redux/actions/appActions';
import {
	setDailyMixes,
	setTracksFromDailies,
} from '../redux/actions/playlistsActions';
import spotifyApi from './spotifyApi';

export default class PlaylistGenerator {
	constructor(store) {
		this.store = store;
		this.dispatch = store.dispatch
		this.user = this.store.getState().user.user;
	}

	async handleGenerate() {
		console.log(this.store)
		this.dispatch(setIsLoading(true));

		try {
			if (this.checkIfTokenExpired()) auth.login();

			const playlists = await this.getDailies();
			const tracks = await this.getTracks(playlists);
			const existingZeroMix = playlists.find(
				item => item.name === 'Микс дня #0'
			);

			if (existingZeroMix) {
				await this.clearPlaylist(existingZeroMix.id);
				this.fillPlaylist(existingZeroMix, tracks);
			} else {
				const newPlaylist = await this.createPlaylist();
				this.fillPlaylist(newPlaylist, tracks);
			}
		} catch (e) {
			console.log(e);
		} finally {
			this.store.dispatch(setIsLoading(false));
		}
	}

	async getDailies() {
		try {
			const playlists = await spotifyApi.getPlaylists();
			const filteredPlaylists = this.filterPlaylists(playlists);
			this.store.dispatch(setDailyMixes(filteredPlaylists));
			return filteredPlaylists;
		} catch (e) {
			console.log(e);
		}
	}

	async clearPlaylist(playlist_id) {
		try {
			const playlistItems = await spotifyApi.getPlaylistItems(playlist_id);
			let items = [...playlistItems.items];
			if (playlistItems.total > playlistItems.items.length) {
				for (let offset = 100; offset < playlistItems.total; offset += 100) {
					const moreItems = await spotifyApi.getPlaylistItems(
						playlist_id,
						offset
					);
					items = [...items, ...moreItems.items];
				}
			}

			this.deleteTracks(playlist_id, items);
		} catch (e) {
			console.log(e);
		}
	}

	async deleteTracks(playlist_id, items) {
		let uris = [];
		items.forEach(item => (uris = [...uris, { uri: item.track.uri }]));

		try {
			while (uris.length > 0) {
				let tracks = uris.splice(0, 100);
				await spotifyApi.deleteItemsFromPlaylist(playlist_id, tracks);
			}
		} catch (e) {
			console.log(e);
		}
	}

	async getTracks(playlists) {
		try {
			let dailyTracks = [];
			for (const playlist of playlists) {
				if (playlist.name !== 'Микс дня #0') {
					const { items } = await spotifyApi.getPlaylistItems(playlist.id);
					dailyTracks = dailyTracks.concat(items);
				}
			}
			this.store.dispatch(setTracksFromDailies(dailyTracks));
			return dailyTracks;
		} catch (e) {
			console.log(e);
		}
	}

	async createPlaylist() {
		try {
			const playlist = await spotifyApi.createPlaylist(this.user.id);
			return playlist;
		} catch (e) {
			console.log(e);
		}
	}

	async fillPlaylist(playlist, tracks) {
		try {
			let currentArr;

			while (tracks.length > 0) {
				let uris = [];
				currentArr = tracks.splice(0, 100);
				for (const track of currentArr) {
					uris.push(track.track.uri);
				}
				const res = await spotifyApi.addItemsToPlayList(
					playlist.id,
					this.shuffle(uris)
				);
				console.log(res);
			}
		} catch (e) {
			console.log(e);
		}
	}

	shuffle(array) {
		let currentIndex = array.length,
			randomIndex;

		while (currentIndex !== 0) {
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex--;

			[array[currentIndex], array[randomIndex]] = [
				array[randomIndex],
				array[currentIndex],
			];
		}

		return array;
	}

	filterPlaylists(playlists) {
		const dailyMixes = playlists.filter(playlist =>
			playlist.name.includes('Микс дня')
		);
		return dailyMixes;
	}

	checkIfTokenExpired() {
		const token = JSON.parse(localStorage.getItem('token'));
		const creationDate = new Date(token.created);

		return (
			Math.abs((new Date().getTime() - creationDate.getTime()) / 1000) > 3600
		);
	}
}
