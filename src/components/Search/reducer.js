const SEARCH_REQUEST = 'SEARCH_REQUEST'
const SEARCH_SUCCESS = 'SEARCH_SUCCESS'
const SEARCH_FAILURE = 'SEARCH_FAILURE'

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