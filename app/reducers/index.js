import { combineReducers } from 'redux'

// Reducers
import eventReducer from './eventReducer'
import planetReducer from './planetReducer'
import widgetReducer from './widgetReducer'
import searchLayoutReducer from './searchLayoutReducer'
import mainLayoutReducer from './mainLayoutReducer'

// Combine Reducers
var reducers = combineReducers({
    eventState: eventReducer,
    planetState: planetReducer,
    widgetState: widgetReducer,
    searchLayoutState: searchLayoutReducer,
    mainLayoutState: mainLayoutReducer
})

export default reducers
