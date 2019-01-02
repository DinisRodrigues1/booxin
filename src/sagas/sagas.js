import { call, put, takeEvery, takeLatest } from 'redux-saga'
import axios from 'axios'

const fetchData = (url) => {
    return axios({
        method: 'get',
        url: url
    })
}


// worker saga
export function* workSearch(){
    return dispatch => {
        dispatch({ type: 'SEARCH',  })
        fetch('http://openlibrary.org/search.json?q='+this.props.search).then(results => {
            dispatch({ type: 'SEARCH', payload: results})
        })
    }
}

// watcher saga
export default function* watchSearch(){
    yield takeLatest('SEARCH_REQUEST', workSearch)
}

// [root saga]
export function* rootSaga() {
    //console.log('Hello Saga')
    yield [
        watchSearch()
    ]
}