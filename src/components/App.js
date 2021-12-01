/* eslint-disable react-hooks/exhaustive-deps */
import './App.css';
import Login from './Login/Login';
import Playlists from './Playlists/Playlists';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Header from './Header/Header';
import { useEffect } from 'react';
import auth from '../auth/auth';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchUserInfo } from '../redux/actions/userActions';
import { colors, NON_REDIR_HASHES } from '../utils/constants';
import { setIsMobile } from '../redux/actions/appActions';
import './MobileNav/MobileNav.css'
import MobileNav from './MobileNav/MobileNav';

function App() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const isMobile = useSelector(state => state.app.isMobile);

	useEffect(() => {
		checkIfMobile();
		changeMetaThemeColor();

		window.addEventListener('resize', checkIfMobile);

		if (
			!NON_REDIR_HASHES.some(hash => window.location.hash === hash) &&
			window.location.hash !== ''
		) {
			auth.getTokenDataFromUrl(window.location.hash);
			dispatch(fetchUserInfo());
			navigate('/playlists');
		}
	}, []);

	function changeMetaThemeColor() {
		const metaLightColor = document.querySelector('meta[name="theme-color"]');
		// metaLightColor.setAttribute('content', '#EADDFF');
		metaLightColor.setAttribute('content', colors.purple.secondary[90]);
	}

	function checkIfMobile() {
		if (window.screen.width <= 424) {
			dispatch(setIsMobile(true));
		} else {
			dispatch(setIsMobile(false));
		}
	}

	return (
		<div className="App">
			<Header />
			{!isMobile && <Navbar />}

			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="playlists" element={<Playlists />} />
			</Routes>
			{isMobile && <MobileNav />}
		</div>
	);
}

export default App;
