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
import { fetchUserInfo } from '../redux/actions/userActions';
import { NON_REDIR_HASHES, ROUTER_LINKS } from '../utils/constants';
import { colorTheme } from '../utils/colors';
import { setIsMobile } from '../redux/actions/appActions';
import './MobileNav/MobileNav.css';
import MobileNav from './MobileNav/MobileNav';

function App() {
	const dispatch = useDispatch();
	const isMobile = useSelector(state => state.app.isMobile);
	const user = useSelector(state => state.user);

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
		}
	}, []);

	function changeMetaThemeColor() {
		const metaLightColor = document.querySelector('meta[name="theme-color"]');
		metaLightColor.setAttribute('content', colorTheme.secondary[90]);
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
			{!isMobile && <Navbar links={ROUTER_LINKS} />}

			<Routes>
				<Route
					path="/"
					element={
						user && auth.checkIfTokenExpired() ? <Login /> : <Playlists />
					}
				/>
				{/* <Route path="settings" element={<Playlists />} />
				<Route path="profile" element={<Playlists />} /> */}
			</Routes>

			{isMobile && <MobileNav links={ROUTER_LINKS} />}
		</div>
	);
}

export default App;
