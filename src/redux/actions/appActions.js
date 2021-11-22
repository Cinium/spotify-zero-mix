import { IS_LOADING } from "../types";

export function setIsLoading(boolean) {
	return {
		type: IS_LOADING,
		payload: boolean
	}
}