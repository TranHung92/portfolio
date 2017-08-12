import {
	LOAD_PAGE,
} from './types'

export function loadPage(isLoading) {
	return {
		type: LOAD_PAGE,
		payload: !isLoading
	}
}