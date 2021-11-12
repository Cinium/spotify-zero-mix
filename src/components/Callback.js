import { completeLogin } from '../auth/auth';
import { useNavigate } from 'react-router-dom';

import { useEffect } from 'react';

function Callback() {
	const navigate = useNavigate();

	// useEffect(() => {
	// 	completeLogin()
	// 		.then(() => {
	// 			navigate('/playlists');
	// 		})
	// 		.catch(error => {
	// 			console.error(error);
	// 			navigate('/');
	// 		});
	// }, []);

	async function getParamsFromUrl(hash) {
		const values = hash.substring(1).split('&')
		let token = {};
		values.forEach(el => {
			const [ key, value ] = el.split('=');
			token[key] = value
		})
		localStorage.setItem('token', JSON.stringify(token))
		navigate('/playlists');
	}

	useEffect(() => {
		getParamsFromUrl(window.location.hash);
		
	}, [])

	return (
		<div>
			<main>
				<h1 >
					Logging you in...
				</h1>
			</main>
		</div>
	);
}

export default Callback;