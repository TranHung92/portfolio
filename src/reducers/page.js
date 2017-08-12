import {
	LOAD_PAGE,
} from '../actions/types'

const initialState = {
	isLoaded: false
}


export default function(state = initialState, action) {
	switch (action.type) {
		case LOAD_PAGE:
			return { ...state, isLoaded: action.payload }
		default:
			return state;
	}
}