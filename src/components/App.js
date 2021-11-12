import { useEffect, useState } from 'react';
import './App.css';
import { beginLogin } from '../auth/auth';
import useUser from '../utils/useUser';
import Callback from '../components/Callback';
import Login from '../components/Login';
import Playlists from '../components/Playlists'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// const authEndpoint = 'https://accounts.spotify.com/authorize';
// const clientId = '6f24e1aa19004f7cab42054a136c6efb';
// const redirectUri = 'http://localhost:3000/';
// const scopes = ['playlist-read-private'];

function App() {
	return (
		<BrowserRouter>
			{/* <div className="App"> */}
					{/* <button
					onClick={async () => {
						await beginLogin();
					}}
				>
					Login
				</button> */}
					{/* {loggedOut && <button onClick={() => beginLogin()}>Login</button>} */}
				<Routes>
					<Route path="/" element={<Login />} />
					<Route path="/callback" element={<Callback />} />
					<Route path="/playlists" element={<Playlists />} />
				</Routes>
			{/* </div> */}
		</BrowserRouter>
	);
}

export default App;
