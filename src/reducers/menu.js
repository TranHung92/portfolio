import {
	SHOW_MENU,
	TOGGLE_MENU,
	RESET_Z_INDEX,
	SET_Z_INDEX,
	HIDE_MENU,
} from '../actions/types'

const initialState = {
	showMenu: false,
	visible: false,
	zIndex: 1000
}

export default function(state = initialState, action) {
	switch (action.type) {
		case SHOW_MENU:
			return { ...state, showMenu: true }
		case HIDE_MENU:
			return { ...state, visible: false }
		case TOGGLE_MENU:
			return { ...state, visible: action.payload }
		case SET_Z_INDEX:
			return { ...state, zIndex: 1 }
		case RESET_Z_INDEX:
			return { ...state, zIndex: 1000 }
		default:
			return state;
	}
}