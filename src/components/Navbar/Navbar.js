import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
	return (
		<ul className="navbar">
			<li className="navbar__item">
				<NavLink
					to="/about"
					className="navbar__link"
					style={({ isActive }) => ({
						fontWeight: isActive ? '500' : '400',
						backgroundColor: isActive ? '#D0BCFF' : '',
						padding: isActive ? '3px 12px 6px' : ''
					})}
				>
					About
				</NavLink>
			</li>
			<li className="navbar__item">
				<NavLink
					to="/"
					className="navbar__link"
					style={({ isActive }) => ({
						fontWeight: isActive ? '500' : '400',
						backgroundColor: isActive ? '#D0BCFF' : '',
						padding: isActive ? '3px 12px 6px' : ''
					})}
				>
					Login
				</NavLink>
			</li>
			<li className="navbar__item">
				<NavLink
					to="/playlists"
					className="navbar__link"
					style={({ isActive }) => ({
						fontWeight: isActive ? '500' : '400',
						backgroundColor: isActive ? '#D0BCFF' : '',
						padding: isActive ? '3px 12px 6px' : ''
					})}
				>
					Generate
				</NavLink>
			</li>
			
		</ul>
	);
}

export default Navbar;
