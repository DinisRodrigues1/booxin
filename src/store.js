import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { reduxFirestore, getFirestore } from 'redux-firestore'
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'
import fbConfig from './config/fbConfig'
import rootReducer from './reducers';

const reduxDevTools =
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(rootReducer, applyMiddleware(thunk))
export default function configureStore(/* initialState = {} */) {
    const store = createStore(rootReducer,
        compose(applyMiddleware(thunk.withExtraArgument({ getFirestore, getFirebase, reduxDevTools })),
        reduxFirestore(fbConfig),
        reactReduxFirebase(fbConfig, {attachAuthIsReady: true})
        )
    )

    return store
}
