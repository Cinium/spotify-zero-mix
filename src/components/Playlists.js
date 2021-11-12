import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import spotifyApi from '../utils/spotifyApi';
import Player from './Player/Player';

export default function Playlists() {
	const navigate = useNavigate();
	const [dailyMixes, setDailyMixes] = useState([]);
	const [tracks, setTracks] = useState([]);
	const [token, setToken] = useState({});
	const [user, setUser] = useState({});
	const [newPlaylist, setNewPlaylist] = useState({});
	const [zeroMix, setZeroMix] = useState(null);
	const [isZeroMixCreated, setIsZeroMixCreated] = useState(false)

	useEffect(() => {
		setToken(spotifyApi.getTokenFromLocal());
		// getUserInfo();
	}, []);

	useEffect(() => {
		if (Object.keys(user).length !== 0 && user.constructor === Object)
			getDailies();
	}, [user]);

	useEffect(() => {
		getTracks();
	}, [dailyMixes]);

	useEffect(() => {
		createPlaylist();
	}, [tracks]);

	useEffect(() => {
		fillNewPlaylist();
	}, [newPlaylist]);

	async function startCreatingPlaylist() {
		await createPlaylist();
		// await getTracks();
	}

	async function getDailies() {
		const playlists = await spotifyApi.getPlaylists();
		let existingMix = playlists.find(item => item.name === 'Микс дня #0');
		setZeroMix(existingMix);
		setDailyMixes(filterPlaylists(playlists));
	}

	async function getTracks() {
		let allTracks = [];
		for (const playlist of dailyMixes) {
			const items = await spotifyApi.getPlaylistItems(playlist.id);
			allTracks = allTracks.concat(items);
		}
		setTracks(allTracks);
	}

	async function getUserInfo() {
		const userInfo = await spotifyApi.getUserInfo();
		setUser(userInfo);
	}

	async function createPlaylist() {
		if (zeroMix === undefined) {
			const playlist = await spotifyApi.createPlaylist(user.id);
			setNewPlaylist(playlist);
		} else {
			setNewPlaylist(zeroMix);
		}
	}

	async function fillNewPlaylist() {
		let allTracks = tracks.slice();
		let currentArr;
		while (allTracks.length > 0) {
			let uris = [];
			currentArr = allTracks.splice(0, 100);
			for (const track of currentArr) {

				uris.push(track.track.uri);
			}
			const res = await spotifyApi.addItemsToPlayList(newPlaylist.id, shuffle(uris));
			console.log(res);
			if(res.snapshot_id) {
				setIsZeroMixCreated(true)
			}
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

	function filterPlaylists(items) {
		const dailyMixes = items.filter(playlist => {
			const imagesArr = playlist.images[0];
			if (!imagesArr) return false;
			const imageUrl = imagesArr.url;
			if (imageUrl === undefined) return false;
			return imageUrl.substring(8, 16) === 'dailymix';
		});
		return dailyMixes;
	}

	return (
		<div>
			<button onClick={getUserInfo}>Create list</button>
			{isZeroMixCreated && (
				<p>Playlist created!</p>
			)}

			{token &&
				// <Player />
				'nah'}
		</div>
	);
}
