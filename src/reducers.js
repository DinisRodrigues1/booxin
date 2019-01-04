import { combineReducers } from 'redux'
import searchReducer from './components/Search/reducer'
import authReducer from './components/Login/authReducer'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
    search: searchReducer,
    auth: authReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
})

export default rootReducer