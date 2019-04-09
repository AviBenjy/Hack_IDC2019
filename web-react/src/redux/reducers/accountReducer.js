// actions Types
// import { ACTION } from '../actionsTypes'

const initialState = {

}

export const accountReducer = (state = initialState, {type, payload}) => {
	const account = { ...state.helper }
  	switch (type) {
  		// case ACTION:
  	    // 	return { ...state }
  		default:
  	    	return state
  	}
}