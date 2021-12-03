import { colorTheme } from '../../utils/colors';
import './Spinner.css';

function Spinner() {
	return (
		<div className="lds-ring" style={{ marginTop: '150px' }}>
			<div
				style={{
					borderColor:
						colorTheme.tertiary[80] + ' transparent transparent transparent',
				}}
			></div>
			<div
				style={{
					borderColor:
						colorTheme.tertiary[80] + ' transparent transparent transparent',
				}}
			></div>
			<div
				style={{
					borderColor:
						colorTheme.tertiary[80] + ' transparent transparent transparent',
				}}
			></div>
			<div
				style={{
					borderColor:
						colorTheme.tertiary[80] + ' transparent transparent transparent',
				}}
			></div>
		</div>
	);
}

export default Spinner;
