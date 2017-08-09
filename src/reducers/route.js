import {
	GET_PARAMS
} from '../actions/types'

const initialState = {
	currentRoute: null
}

export default function(state = initialState, action) {
	switch (action.type) {
		case GET_PARAMS:
			return { ...state, currentRoute: action.payload }
		default:
			return state
	}
}