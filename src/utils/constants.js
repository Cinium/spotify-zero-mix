export const CLIENT_ID = '6f24e1aa19004f7cab42054a136c6efb';

// export const REDIRECT_URI = `http://localhost:3000`;
// export const REDIRECT_URI = `https://cinium.github.io/spotify-zero-mix`;
export const REDIRECT_URI = window.location.origin;

export const AUTHORIZE_ENDPOINT = 'https://accounts.spotify.com/authorize';
export const SCOPES = ['playlist-read-private', 'playlist-modify-private', 'playlist-modify-public'];
export const SCOPES_STRING = SCOPES.join('%20');