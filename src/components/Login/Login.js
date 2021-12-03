import auth from '../../auth/auth';
import { colorTheme } from '../../utils/colors';
import './Login.css';

function Login() {
	return (
		<section className="login">
			<h2 className="title">Войди в Spotify</h2>
			<button
				onClick={auth.login}
				className="login__button button"
				style={{ backgroundColor: colorTheme.primary[40] }}
			>
				Войти
			</button>
		</section>
	);
}

export default Login;
