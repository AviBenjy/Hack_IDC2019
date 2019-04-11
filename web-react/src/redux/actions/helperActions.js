// actions Types
import { SHOW_DICTIONARY } from '../actionsTypes'


export const toggleDictionary = (show) => (dispatch) => {
    dispatch({
        type: SHOW_DICTIONARY,
        payload: show
    })
}