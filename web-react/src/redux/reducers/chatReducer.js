// actions Types
// import { ACTION } from '../actionsTypes'

const initialState = {

}

export const chatReducer = (state = initialState, {type, payload}) => {
	const chat = { ...state.chat }
  	switch (type) {
  		// case ACTION:
  	    // 	return { ...state }
  		default:
  	    	return state
  	}
}

