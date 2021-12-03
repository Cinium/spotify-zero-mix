import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App.js';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import store from './redux/store';
import { colorTheme } from './utils/colors';

document.querySelector('body').style.backgroundColor = colorTheme.neutral[99];
document.querySelector('body').style.color = colorTheme.primary[10];

ReactDOM.render(
	<Provider store={store}>
		<HashRouter>
			<App />
		</HashRouter>
	</Provider>,
	document.getElementById('root')
);

reportWebVitals();
