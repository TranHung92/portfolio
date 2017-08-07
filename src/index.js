import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import App from './components/app';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ProjectsPage from './components/ProjectsPage';

import configureStore from './store';

import './styles/styles.css';

const store = configureStore();
console.log('index', this)
ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<div>
			<App />
				<Switch>
					<Route path='/home' component={HomePage} />
					<Route path='/about' component={AboutPage} />
		 			<Route path='/' component={ProjectsPage} />
				</Switch>			
			</div>

		</BrowserRouter>		
	</Provider>

	, document.getElementById('root')
);

