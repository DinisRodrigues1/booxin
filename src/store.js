import { createStore } from 'react-redux'
import searchReducer from './components/Search/reducer'

export default function configureStore(initialState = {}) {
    const store = createStore(searchReducer)

    return store
}
