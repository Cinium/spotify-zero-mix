// *** AUTH CONSTANTS ***
export const CLIENT_ID = '6f24e1aa19004f7cab42054a136c6efb';

export const REDIRECT_URI =
	window.location.origin === 'https://cinium.github.io'
		? 'https://cinium.github.io/spotify-zero-mix'
		: 'http://localhost:3000';

export const AUTHORIZE_ENDPOINT = 'https://accounts.spotify.com/authorize';

export const SCOPES = [
	'playlist-read-private',
	'playlist-modify-private',
	'playlist-modify-public',
];

export const SCOPES_STRING = SCOPES.join('%20');

// *** ROUTER CONSTANTS ***
export const ROUTER_LINKS = [
	{
		to: '/',
		name: 'Главная',
		span: 'login'
	},
	{
		to: '/about',
		name: 'О проекте',
		span: 'info'
	},
	{
		to: '/settings',
		name: 'Настройки',
		span: 'add_circle'
	},
];

export const NON_REDIR_HASHES = ROUTER_LINKS.map(link => ('#' + link.to));
