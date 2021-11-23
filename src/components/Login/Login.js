import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import auth from '../../auth/auth';
import { fetchUserInfo } from '../../redux/actions/userActions';

function Login() {
	// const navigate = useNavigate();
	// const dispatch = useDispatch();

	// useEffect(() => {
	// 	console.log(window.location);
	// 	if (
	// 		window.location.hash &&
	// 		window.location.hash !== '#/playlists' &&
	// 		window.location.hash !== '#/'
	// 	) {
	// 		auth.getTokenDataFromUrl(window.location.hash);
	// 		dispatch(fetchUserInfo());
	// 		navigate('/playlists');
	// 	}
	// }, []);

	return (
		<main>
			<h2 className="title">Войди в Spotify</h2>
			<button onClick={auth.login} className="button">
				Войти
			</button>
		</main>
	);
}

export default Login;
