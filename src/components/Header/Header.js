import { useSelector } from 'react-redux';
import { colorTheme } from '../../utils/colors';
import Avatar from '../Avatar/Avatar';
import './Header.css';

function Header() {
	const user = useSelector(state => state.user.user);

	return (
		<header
			className="header"
			style={{ backgroundColor: colorTheme.secondary[95] }}
		>
			Spotify Zero Mix
			{user?.images && <Avatar />}
		</header>
	);
}

export default Header;
