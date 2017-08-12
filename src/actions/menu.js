import {
	SHOW_MENU,
	TOGGLE_MENU,
	RESET_Z_INDEX,
	HIDE_MENU,
	SET_Z_INDEX
} from './types';

export function showMenu() {
	return {
		type: SHOW_MENU
	}
}

export function toggleMenu(visible) {
	return {
		type: TOGGLE_MENU,
		payload: !visible
	}
}

export function resetMenuIndex() {
	return {
		type: RESET_Z_INDEX
	}
}

export function setMenuIndex() {
	return {
		type: SET_Z_INDEX
	}
}

export function hideMenu() {
	return {
		type: HIDE_MENU
	}
}