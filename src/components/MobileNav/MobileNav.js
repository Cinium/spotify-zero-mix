import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router';
import { colorTheme } from '../../utils/colors';
import createRipple from '../../utils/ripple';
import './MobileNav.css';

function MobileNav({ links }) {
	const location = useLocation();

	useEffect(() => {
		const activeLink = document.querySelector('.mobilenav__link.active');
		const links = [...document.querySelectorAll('.mobilenav__link')].filter(
			link => link !== activeLink
		);

		activeLink.querySelector('.material-icons').style.backgroundColor =
			colorTheme.secondary[90];

		links.forEach(
			link =>
				(link.querySelector('.material-icons').style.backgroundColor =
					'transparent')
		);
	}, [location.pathname]);

	return (
		<ul
			className="mobilenav"
			style={{ backgroundColor: colorTheme.secondary[95] }}
		>
			{links.map((link, i) => (
				<NavLink
					to={link.to}
					key={i}
					className={({ isActive }) =>
						'mobilenav__link' + (isActive ? ' active' : '')
					}
					style={({ isActive }) => ({
						color: isActive
							? colorTheme.secondary[10]
							: colorTheme.neutral[30],
					})}
					onClick={e => createRipple(e, colorTheme.tertiary[80])}
				>
					<span className="material-icons">{link.span}</span>
					<label className="mobilenav__label">{link.name}</label>
				</NavLink>
			))}
		</ul>
	);
}

export default MobileNav;
