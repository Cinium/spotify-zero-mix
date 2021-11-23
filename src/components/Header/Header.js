import { useSelector } from 'react-redux';
import './Header.css';

function Header() {
	const user = useSelector(state => state.user);

	return (
			<header className="header">
				Spotify Zero Mix
				{user?.images?.length !== 0 ? (
				<img src={user?.images?.large} className="header__user-pic" style={{}} alt="user pic" />
			) : (
				<div className="header__avatar">{user?.display_name.slice(0,1)}</div>
			)}
			</header>
	);
}

export default Header;