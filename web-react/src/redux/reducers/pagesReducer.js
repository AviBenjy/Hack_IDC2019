// actions Types
import { CHANGE_PAGE } from '../actionsTypes'

const initialState = {
    pages: ['dashboard', 'deals', 'chat', 'helper'],
    currentPage: 'dashboard'
}

export const pagesReducer = (state = initialState, {type, payload}) => {
    const pages = { ...state.pages }

    switch (type) {
	    case CHANGE_PAGE:
	        return { ...state, currentPage: { ...state.pages, currentPage: payload }}
	    default:
	        return state
    }
}
