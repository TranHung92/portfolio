import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
// import ReallySmoothScroll from 'really-smooth-scroll';

import App from './components/app';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import './styles/styles.css';

// ReallySmoothScroll.shim();

ReactDOM.render(
	<BrowserRouter>
		<Switch>
			<Route path='/home' component={HomePage} />
			<Route path='/about' component={AboutPage} />
 			<Route path='/' component={App} />
		</Switch>
	</BrowserRouter>
	, document.getElementById('root')
);

