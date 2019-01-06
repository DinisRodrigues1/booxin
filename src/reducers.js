import { combineReducers } from 'redux'
import searchReducer from './components/search_result/Search/reducer'
import authReducer from './components/auth/Login/authReducer'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
    search: searchReducer,
    auth: authReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
})

export default rootReducer