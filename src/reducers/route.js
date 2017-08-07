import {
	GET_PARAMS
} from '../actions/types'

export default function(state = {}, action) {
	switch (action.type) {
		case GET_PARAMS:
			return { ...state, currentRoute: action.payload }
		default:
			return state
	}
}