import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { colors } from '../../utils/constants';
import './MobileNav.css';

function MobileNav() {
	useEffect(() => {
		const spans = [
			...document.querySelector('.mobilenav').querySelectorAll('span'),
		];

		switch (window.location.hash) {
			case '#/about':
				spans.forEach(span => {
					span.style.backgroundColor =
						span.textContent === 'info'
							? colors.purple.secondary[90]
							: 'transparent';
				});
				break;
			case '#/':
				spans.forEach(span => {
					span.style.backgroundColor =
						span.textContent === 'login'
							? colors.purple.secondary[90]
							: 'transparent';
				});
				break;
			case '#/playlists':
				spans.forEach(span => {
					span.style.backgroundColor =
						span.textContent === 'add_circle'
							? colors.purple.secondary[90]
							: 'transparent';
				});
				break;
			default:
				break;
		}
	});

	return (
		<ul
			className="mobilenav"
			style={{ backgroundColor: colors.purple.secondary[95] }}
		>
			<NavLink
				to="/about"
				className={({ isActive }) =>
					'mobilenav__link' + (isActive ? ' active' : '')
				}
				style={({ isActive }) => ({
					color: isActive
						? colors.purple.secondary[10]
						: colors.purple.neutral[30],
				})}
			>
				<span className="material-icons">info</span>
				<label className="mobilenav__label">About</label>
			</NavLink>
			<NavLink
				to="/"
				className={({ isActive }) =>
					'mobilenav__link' + (isActive ? ' active' : '')
				}
				style={({ isActive }) => ({
					color: isActive
						? colors.purple.secondary[10]
						: colors.purple.neutral[30],
				})}
			>
				<span className="material-icons">login</span>
				<label className="mobilenav__label">Login</label>
			</NavLink>
			<NavLink
				to="/playlists"
				className={({ isActive }) =>
					'mobilenav__link' + (isActive ? ' active' : '')
				}
				style={({ isActive }) => ({
					color: isActive
						? colors.purple.secondary[10]
						: colors.purple.neutral[30],
				})}
			>
				<span className="material-icons">add_circle</span>
				<label className="mobilenav__label">Generate</label>
			</NavLink>
		</ul>
	);
}

export default MobileNav;
