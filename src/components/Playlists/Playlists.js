import { useDispatch, useSelector } from 'react-redux';
import auth from '../../auth/auth';
import { setIsLoading, setSuccessMessage } from '../../redux/actions/appActions';
import spotifyApi from '../../utils/spotifyApi';
import Spinner from '../Spinner/Spinner';
import './Playlists.css';

export default function Playlists() {
	const user = useSelector(state => state.user);
	const isLoading = useSelector(state => state.app.isLoading);
	const success = useSelector(state => state.app.successMessage);
	const dispatch = useDispatch();

	async function handleGenerate() {
		if (checkIfTokenExpired()) auth.login();

		dispatch(setIsLoading(true));
		try {
			const playlists = await getDailies();
			const tracks = await getTracks(playlists);
			const existingZeroMix = playlists.find(
				item => item.name === 'Микс дня #0'
			);

			if (existingZeroMix) {
				await clearPlaylist(existingZeroMix.id);
				fillPlaylist(existingZeroMix, tracks);
			} else {
				const newPlaylist = await createPlaylist();
				fillPlaylist(newPlaylist, tracks);
			}

			dispatch(setSuccessMessage(true))
		} catch (e) {
			console.log(e);
		} finally {
			dispatch(setIsLoading(false));
		}
	}

	async function getDailies() {
		try {
			const playlists = await spotifyApi.getPlaylists();
			return filterPlaylists(playlists);
		} catch (e) {
			console.log(e);
		}
	}

	async function getTracks(playlists) {
		try {
			let dailyTracks = [];
			for (const playlist of playlists) {
				if (playlist.name !== 'Микс дня #0') {
					const { items } = await spotifyApi.getPlaylistItems(playlist.id);
					dailyTracks = dailyTracks.concat(items);
				}
			}
			return dailyTracks;
		} catch (e) {
			console.log(e);
		}
	}

	async function clearPlaylist(playlist_id) {
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

			deleteTracks(playlist_id, items);
		} catch (e) {
			console.log(e);
		}
	}

	async function deleteTracks(playlist_id, items) {
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

	async function createPlaylist() {
		try {
			const playlist = await spotifyApi.createPlaylist(user.id);
			return playlist;
		} catch (e) {
			console.log(e);
		}
	}

	async function fillPlaylist(playlist, tracks) {
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
					shuffle(uris)
				);
				console.log(res);
			}
		} catch (e) {
			console.log(e);
		}
	}

	function shuffle(array) {
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

	function filterPlaylists(playlists) {
		const dailyMixes = playlists.filter(playlist =>
			playlist.name.includes('Микс дня')
		);
		return dailyMixes;
	}

	function checkIfTokenExpired() {
		const token = JSON.parse(localStorage.getItem('token'));
		const creationDate = new Date(token.created);

		return (
			Math.abs((new Date().getTime() - creationDate.getTime()) / 1000) > 3600
		);
	}

	return (
		<div className="playlists">
			<h2 className="playlists__title title">
				Время генерировать плейлист дня!
			</h2>
			{isLoading && <Spinner />}
			{success && <p style={{color: '#B3261E', fontSize: '20px'}} >Плейлист создан!</p>}
			<button
				onClick={handleGenerate}
				disabled={isLoading ? true : false}
				className={`playlists__create-button button ${
					isLoading && 'button_disabled'
				}`}
			>
				Создать плейлист
			</button>
		</div>
	);
}
