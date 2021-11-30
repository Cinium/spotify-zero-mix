import './Spinner.css'

function Spinner() {
	return (
		<div className="lds-ring" style={{marginTop: '150px'}}>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	);
}

export default Spinner;
