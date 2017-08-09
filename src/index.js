import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import App from './components/app';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ProjectsPage from './components/ProjectsPage';
import FirstProject from './components/projectsPage/project-1';
import configureStore from './store';

import './styles/styles.css';

import {
	homeUrl,
	aboutUrl,
	projectsUrl,
	firstProjectUrl,
} from './constants'

const store = configureStore();
console.log('index', this)
ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<div>
				<App />
				<Switch>
					<Route path={homeUrl} component={HomePage} />
					<Route path={aboutUrl} component={AboutPage} />
		 			<Route path={projectsUrl} component={ProjectsPage} />
		 			<Route path={firstProjectUrl} component={FirstProject} />
				</Switch>			
			</div>

		</BrowserRouter>		
	</Provider>

	, document.getElementById('root')
);

