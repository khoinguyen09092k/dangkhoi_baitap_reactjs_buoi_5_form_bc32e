import {combineReducers,createStore } from 'redux';
import * as reducer from './reducer'

const rootReducers = combineReducers({
    ...reducer,
})
export const store = createStore(
    rootReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)