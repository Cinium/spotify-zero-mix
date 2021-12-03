import {
	AUTHORIZE_ENDPOINT,
	CLIENT_ID,
	REDIRECT_URI,
	SCOPES_STRING,
} from '../utils/constants';

class Auth {
	login() {
		window.location = `${AUTHORIZE_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPES_STRING}&response_type=token&show_dialog=true`;
	}

	getTokenDataFromUrl(hash) {
		const values = hash.substring(1).split('&');
		let token = {
			created: new Date(),
		};
		values.forEach(el => {
			const [key, value] = el.split('=');
			token[key] = value;
		});
		localStorage.setItem('token', JSON.stringify(token));
	}

	checkIfTokenExpired() {
		const token = JSON.parse(localStorage.getItem('token'));
		if (token) {
			const creationDate = new Date(token.created);

			return (
				Math.abs((new Date().getTime() - creationDate.getTime()) / 1000) > 3600
			);
		} else {
			return true;
		}
	}
}

const auth = new Auth();
export default auth;
