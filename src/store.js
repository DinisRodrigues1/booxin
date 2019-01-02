import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import searchReducer from './components/Search/reducer'
import { rootSaga } from './sagas/sagas';

const sagaMiddleware = createSagaMiddleware()
export default function configureStore(/* initialState = {} */) {
    const store = createStore(
        searchReducer,
        applyMiddleware(sagaMiddleware)
    )
    sagaMiddleware.run(rootSaga)

    return store
}
