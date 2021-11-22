import './App.css';
import Callback from '../components/Callback';
import Login from './Login/Login';
import Playlists from './Playlists/Playlists';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Header from './Header/Header';

function App() {
	return (
		<div className="App">
			<Header />
			{/* <BrowserRouter basename={process.env.PUBLIC_URL}> */}
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<Login />} />
					<Route path="/callback/" element={<Callback />} />
					<Route path="/playlists" element={<Playlists />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
