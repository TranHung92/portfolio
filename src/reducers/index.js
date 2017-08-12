import { combineReducers } from 'redux';

import menu from './menu';
import route from './route';
import page from './page';

const rootReducer = combineReducers({
	menu,
	route,
	page
})

export default rootReducer;
