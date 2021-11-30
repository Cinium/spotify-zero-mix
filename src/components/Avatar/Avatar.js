import { useSelector } from 'react-redux';
import './Avatar.css';

function Avatar() {
	const user = useSelector(state => state.user.user);

	return (
		<div className="avatar">
			{user?.images?.length !== 0 ? (
				<img
					src={user.images.large}
					alt="user pic"
				/>
			) : (
				<span>{user.display_name.slice(0, 1)}</span>
			)}
		</div>
	);
}

export default Avatar;
