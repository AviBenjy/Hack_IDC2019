import { combineReducers } from 'redux'

// All reducers
import { dashboardReducer as dashboard } from './dashboardReducer'
import { pagesReducer as pages } from './pagesReducer'
import { chatReducer as chat } from './chatReducer'
import { helperReducer as helper } from './helperReducer'
import { accountReducer as account } from './accountReducer'

const rootReducer = combineReducers({
    pages,
    account,
    dashboard,
    chat,
    helper
})


export default rootReducer
