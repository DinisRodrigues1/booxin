const addToLibraryReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TO_LIBRARY_SUCCESS':
        return {
            state
        }    
        case 'ADD_TO_LIBRARY_ERROR':
        console.log('error', action.err)
        return {
            state
        } 
        case 'USER_DATA_SUCCESS':
        return {
            state
        } 
        case 'ALL_USER_DATA_SUCCESS':
        return {
            state
        }
        default: 
            return state
    }
}