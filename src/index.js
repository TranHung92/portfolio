import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import ReallySmoothScroll from 'really-smooth-scroll';

import App from './components/app';
import HomePage from './components/HomePage';
import './styles/styles.css';


ReactDOM.render(
	<BrowserRouter>
		<Switch>
			<Route path='/home' component={HomePage} />
			<Route path='/' component={App} />
		</Switch>
	</BrowserRouter>
	, document.getElementById('root')
);

