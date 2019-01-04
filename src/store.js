import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import searchReducer from './components/Search/reducer'
import { rootSaga } from './sagas/sagas'
import { getFirestore } from 'redux-firestore'
import { getFirebase } from 'react-redux-firebase'

const sagaMiddleware = createSagaMiddleware()

const reduxDevTools =
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export default function configureStore(/* initialState = {} */) {
    const store = createStore(
        searchReducer,
        compose(applyMiddleware(sagaMiddleware.withExtraArgument({getFirebase, getFirestore})), reduxDevTools)
    )
    sagaMiddleware.run(rootSaga)

    return store
}
