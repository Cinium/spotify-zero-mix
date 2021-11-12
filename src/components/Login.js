import { completeLogin } from '../auth/auth';
import { useNavigate } from 'react-router-dom';

import { useEffect } from 'react';
import { beginLogin } from '../auth/auth';

function Login() {
	const CLIENT_ID = '6f24e1aa19004f7cab42054a136c6efb';
	const REDIRECT_URI = `http://localhost:3000/callback`;
	const AUTHORIZE_ENDPOINT = 'https://accounts.spotify.com/authorize';
	const SCOPES = ['playlist-read-private', 'playlist-modify-private'];

	const SCOPES_STRING = SCOPES.join('%20');

	function handleLogin() {
		window.location = `${AUTHORIZE_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPES_STRING}&response_type=token&show_dialog=false`;
	}

	return (
		<main>
			<h1>Log in!</h1>
			<button onClick={handleLogin}>Login</button>
		</main>
	);
}

export default Login;
