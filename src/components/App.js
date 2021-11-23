import './App.css';
import Login from './Login/Login';
import Playlists from './Playlists/Playlists';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Header from './Header/Header';
import { useDebugValue, useEffect } from 'react';
import auth from '../auth/auth';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchUserInfo } from '../redux/actions/userActions';

function App() {
	console.log(window.location.hash)

	const navigate = useNavigate();
	const dispatch = useDispatch();


	useEffect(() => {
		console.log(window.location);
		if (
			window.location.hash &&
			window.location.hash !== '#/playlists' &&
			window.location.hash !== '#/'
		) {
			auth.getTokenDataFromUrl(window.location.hash);
			dispatch(fetchUserInfo());
			navigate('/playlists');
		}
	}, []);

	return (
		<div className="App">
			<Header />
			<Navbar />
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="playlists" element={<Playlists />} />
			</Routes>
		</div>
	);
}

export default App;
