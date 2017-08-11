import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Menu from './components/Menu';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ProjectsPage from './components/ProjectsPage';
import FirstProject from './components/projectsPage/firstProject';
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
				<Menu />
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

