class SpotifyApi {
	constructor(base_url) {
		this.base_url = base_url;
	}

	getTokenFromLocal() {
		let token;
		if (localStorage.getItem('token')) {
			token = JSON.parse(localStorage.getItem('token'));
			return token;
		}
	}

	async getPlaylists() {
		const token = await this.getTokenFromLocal();

		const res = await fetch(`${this.base_url}/v1/me/playlists`, {
			method: 'GET',
			headers: {
				Authorization: `${token.token_type} ${token.access_token}`,
			},
		});
		const json = await res.json();
		const items = await json.items;
		return items;
	}

	async getPlaylistItems(playlist_id, offset) {
		const token = this.getTokenFromLocal();

		const res = await fetch(
			`${this.base_url}/v1/playlists/${playlist_id}/tracks${
				offset ? `?offset=${offset}&limit=100` : ''
			}`,
			{
				method: 'GET',
				headers: {
					Authorization: `${token.token_type} ${token.access_token}`,
				},
			}
		);
		const json = await res.json();
		return json;
	}

	async getUserInfo() {
		const token = this.getTokenFromLocal();

		const res = await fetch(`${this.base_url}/v1/me`, {
			method: 'GET',
			headers: {
				Authorization: `${token.token_type} ${token.access_token}`,
			},
		});
		const user = await res.json();
		return user;
	}

	async createPlaylist(user_id) {
		const token = this.getTokenFromLocal();

		const res = await fetch(`${this.base_url}/v1/users/${user_id}/playlists`, {
			method: 'POST',
			headers: {
				Authorization: `${token.token_type} ${token.access_token}`,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name: 'Микс дня #0',
				description: 'All in one daily mix',
				public: false,
			}),
		});
		const json = res.json();
		return json;
	}

	async addItemsToPlayList(playlist_id, uris) {
		const token = this.getTokenFromLocal();

		const res = await fetch(
			`${this.base_url}/v1/playlists/${playlist_id}/tracks`,
			{
				method: 'POST',
				headers: {
					Authorization: `${token.token_type} ${token.access_token}`,
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					uris,
					position: 0,
				}),
			}
		);
		const json = res.json();
		return json;
	}

	async deleteItemsFromPlaylist(playlist_id, tracks) {
		const token = this.getTokenFromLocal();

		const res = await fetch(
			`${this.base_url}/v1/playlists/${playlist_id}/tracks`,
			{
				method: 'DELETE',
				headers: {
					Authorization: `${token.token_type} ${token.access_token}`,
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					tracks,
				}),
			}
		);
		const json = res.json();
		return json;
	}
}

const spotifyApi = new SpotifyApi('https://api.spotify.com');
export default spotifyApi;
