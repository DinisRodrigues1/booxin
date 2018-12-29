const initialState = {
    searchResult: null
}

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SEARCH':
            return {
                ...state,
                searchResult: action.search
            }
        default:
            return state
    }
}

export default searchReducer