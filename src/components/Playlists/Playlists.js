import { useSelector } from 'react-redux';
import { colorTheme } from '../../utils/colors';
import handleGenerate from '../../utils/playlistGenerator';
import Spinner from '../Spinner/Spinner';
import './Playlists.css';

export default function Playlists() {
	const isLoading = useSelector(state => state.app.isLoading);
	const success = useSelector(state => state.app.successMessage);

	return (
		<div className="playlists">
			<h2 className="playlists__title title">
				Время генерировать плейлист дня!
			</h2>
			{isLoading && <Spinner />}
			{success && (
				<p style={{ color: '#B3261E', fontSize: '20px' }}>Плейлист создан!</p>
			)}
			<button
				onClick={handleGenerate}
				disabled={isLoading ? true : false}
				className={`playlists__create-button button ${
					isLoading ? 'button_disabled' : ''
				}`}
				style={{backgroundColor: colorTheme.primary[40]}}
			>
				Создать плейлист
			</button>
		</div>
	);
}
