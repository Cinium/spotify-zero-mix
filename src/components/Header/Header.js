import { useSelector } from 'react-redux';
import { colors } from '../../utils/constants';
import Avatar from '../Avatar/Avatar';
import './Header.css';

function Header() {
	const user = useSelector(state => state.user.user);

	return (
		<header className="header" style={{ backgroundColor: colors.purple.secondary[95] }}>
			Spotify Zero Mix
			{
				user?.images && <Avatar />
			}
		</header>
	);
}

export default Header;
