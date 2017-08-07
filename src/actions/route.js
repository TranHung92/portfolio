import {
	GET_PARAMS
} from './types';

export function getParams(params) {
	return {
		type: GET_PARAMS,
		payload: params
	}
}