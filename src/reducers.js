import { combineReducers } from 'react-redux'
import searchReducer from './components/Search/reducer';

const rootReducer = combineReducers({
    search: searchReducer
})

export default rootReducer