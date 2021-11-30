import { IS_LOADING, IS_MOBILE, SUCCESS_MESSAGE } from '../types';

export function setIsLoading(boolean) {
	return {
		type: IS_LOADING,
		payload: boolean,
	};
}

export function setIsMobile(boolean) {
	return {
		type: IS_MOBILE,
		payload: boolean,
	};
}

export function setSuccessMessage(boolean) {
	return {
		type: SUCCESS_MESSAGE,
		payload: boolean
	}
}
