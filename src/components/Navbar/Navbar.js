import { NavLink } from 'react-router-dom';
import createRipple from '../../utils/ripple';
import './Navbar.css';

function Navbar({ links }) {
	return (
		<ul className="navbar" onClick={e => createRipple(e, '#FFD8E4')}>
			{links.map((link, i) => (
				<li className="navbar__item" key={i}>
					<NavLink
						to={link.to}
						className={({ isActive }) =>
							'navbar__link' + (isActive ? ' navbar__link_active' : '')
						}
					>
						{link.name}
					</NavLink>
				</li>
			))}
		</ul>
	);
}

export default Navbar;
