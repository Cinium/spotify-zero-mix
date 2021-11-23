import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
	return (
		<ul className="navbar">
			<li className="navbar__item">
				<NavLink
					to="/about"
					className={({ isActive }) =>
						'navbar__link' + (isActive ? ' navbar__link_active' : '')
					}
				>
					About
				</NavLink>
			</li>
			<li className="navbar__item">
				<NavLink
					to="/"
					className={({ isActive }) =>
						'navbar__link' + (isActive ? ' navbar__link_active' : '')
					}
				>
					Login
				</NavLink>
			</li>
			<li className="navbar__item">
				<NavLink
					to="/playlists"
					className={({ isActive }) =>
						'navbar__link' + (isActive ? ' navbar__link_active' : '')
					}
				>
					Generate
				</NavLink>
			</li>
		</ul>
	);
}

export default Navbar;
