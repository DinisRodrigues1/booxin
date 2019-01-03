import { combineReducers } from 'react-redux'
import searchReducer from './components/Search/reducer'
import authReducer from './authReducer'

const rootReducer = combineReducers({
    search: searchReducer,
    auth: authReducer
})

export default rootReducer