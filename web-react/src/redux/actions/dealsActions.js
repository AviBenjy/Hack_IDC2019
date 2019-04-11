// action types
import { SELECT_OFFER } from '../actionsTypes'

export const setSelectOffer = (title = '') => ({
	type: SELECT_OFFER,
	payload: title
})