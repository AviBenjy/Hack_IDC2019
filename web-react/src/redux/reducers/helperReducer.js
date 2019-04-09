// actions Types
// import { ACTION } from '../actionsTypes'

const initialState = {

}

export const helperReducer = (state = initialState, {type, payload}) => {
	const helper = { ...state.helper }
  	switch (type) {
  		// case ACTION:
  	    // 	return { ...state }
  		default:
  	    	return state
  	}
}