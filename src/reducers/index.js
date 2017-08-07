import { combineReducers } from 'redux';

import menu from './menu';
import route from './route'

const rootReducer = combineReducers({
	menu,
	route,
})

export default rootReducer;
