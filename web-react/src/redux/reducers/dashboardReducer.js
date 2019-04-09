// actions Types
// import { ACTION } from '../actionsTypes'

const initialState = {

}

export const dashboardReducer = (state = initialState, {type, payload}) => {
	  const dashboard = { ...state.dashboard }
  	    switch (type) {
  		  // case ACTION:
  	    // 	return { ...state }
  		  default:
  	    	  return state
  	}
}