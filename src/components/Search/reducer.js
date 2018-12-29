const initialState = {
    searchValue: null
}

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SEARCH':
            return {
                ...state,
                searchValue: action.search
            }
        default:
            return state
    }
}

export default searchReducer