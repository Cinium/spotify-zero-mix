import auth from '../../auth/auth';
import './Login.css'

function Login() {
	return (
		<section className="login">
			<h2 className="title">Войди в Spotify</h2>
			<button onClick={auth.login} className="login__button button">
				Войти
			</button>
		</section>
	);
}

export default Login;
