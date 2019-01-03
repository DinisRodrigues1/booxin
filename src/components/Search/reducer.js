const SEARCH_REQUEST = 'SEARCH_REQUEST'
const SEARCH_SUCCESS = 'SEARCH_SUCCESS'
const SEARCH_FAILURE = 'SEARCH_FAILURE'

/* const initialState = {
    searchResult: null,
    fetching: null,
    error: null
}

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SEARCH_REQUEST':
            return {
                ...state,
                fetching: true,
                error: null
            }
        case 'SEARCH_SUCCESS':
            return {
                ...state,
                fetching: false,
                searchResult: action.payload
            }
        case 'SEARCH_FAILURE':
            return {
                ...state,
                fetching: false,
                searchResult: null,
                error: action.error
            }
        default:
            return state
    }
} */

const initialState = {
    search: null
}

const searchReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'SEARCH':
            return {
                ...state,
                search: action.payload
            }
        default:
            return {
                ...state
            }
        }
    }

export default searchReducer