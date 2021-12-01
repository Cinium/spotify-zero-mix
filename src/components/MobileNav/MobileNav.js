import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { colors } from '../../utils/constants';
import './MobileNav.css';

function MobileNav() {
	useEffect(() => {
		const spans = [
			...document.querySelector('.mobilenav').querySelectorAll('.material-icons'),
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
			case '':
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

	function createRipple(event) {
		const button = event.currentTarget;

		const circle = document.createElement('span');
		const diameter = Math.max(button.clientWidth, button.clientHeight);
		const radius = diameter / 2;

		// circle.style.width = circle.style.height = `${diameter}px`;
		// circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
		// circle.style.top = `${event.clientY - button.offsetTop - radius}px`;

		circle.style.width = circle.style.height = `${diameter}px`;
		circle.style.left = `${event.clientX - button.getBoundingClientRect().left - radius}px`;
		circle.style.top = `${event.clientY - button.getBoundingClientRect().top - radius}px`;
		circle.style.backgroundColor = colors.purple.primary[80]

		circle.classList.add('ripple');

		const ripple = button.getElementsByClassName('ripple')[0];

		if (ripple) {
			ripple.remove();
		}

		button.append(circle);
	}

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
					onClick={createRipple}
				>
					<span className="material-icons">info</span>
					<label className="mobilenav__label">Nothing</label>
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
					onClick={createRipple}
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
					onClick={createRipple}
				>
					<span className="material-icons">add_circle</span>
					<label className="mobilenav__label">Generate</label>
				</NavLink>
			</ul>
	);
}

export default MobileNav;
