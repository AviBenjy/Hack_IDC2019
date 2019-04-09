import { createStore, compose, applyMiddleware } from 'redux'

// root reducer with all the combine reducers
import rootReducer from './reducers/rootReducer'


const middleware = []

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// initial state of the app
const initialState = {}
  
const store = createStore(rootReducer, initialState, composeEnhancers(
    applyMiddleware(...middleware)
))


export default store