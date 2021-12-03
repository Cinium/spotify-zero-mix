import { useSelector } from 'react-redux';
import { colorTheme } from '../../utils/colors';
import './Avatar.css';

function Avatar() {
	const user = useSelector(state => state.user.user);

	return (
		<div
			className="avatar"
			style={{
				backgroundColor: colorTheme.tertiary[80],
				color: colorTheme.tertiary[10],
			}}
		>
			{user?.images?.length !== 0 ? (
				<img src={user.images.large} alt="user pic" />
			) : (
				<span>{user.display_name.slice(0, 1)}</span>
			)}
		</div>
	);
}

export default Avatar;
