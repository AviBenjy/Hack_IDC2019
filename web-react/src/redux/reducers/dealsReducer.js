// actions Types
import { SELECT_OFFER } from '../actionsTypes'

const initialState = {
  selectedOffer: '',
}
 
export const dealsReducer = (state = initialState, {type, payload}) => {
    const dealsCopy = { ...state.deals }
    const deals = {...dealsCopy, selectedOffer: payload}
  	    switch (type) {
  		    case SELECT_OFFER:
  	    	  return { ...state,  ...deals}
  		  default:
  	    	  return state
  	}
}