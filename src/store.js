import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { reduxFirestore, getFirestore } from 'redux-firestore'
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'
import rootReducer from './reducers'
import fbConfig from './config/fbConfig'


const reduxDevTools =
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();


export default function configureStore(/* initialState = {} */) {
    const store = createStore(rootReducer,
        compose(applyMiddleware(thunk.withExtraArgument({ getFirestore, getFirebase, reduxDevTools })),
        reduxFirestore(fbConfig),
        reactReduxFirebase(fbConfig, {useFirestoreForProfile: true, 
                                      userProfile: 'users',
                                      attachAuthIsReady: true})
        )
    )

    return store
}
