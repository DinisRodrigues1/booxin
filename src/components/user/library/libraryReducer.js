const initState = {
    authError: null
}
const libraryReducer = (state = initState, action) => {
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
        case 'DELETE_SUCCESS':
        console.log("HERE I AM AGAIN ON MY OWN")
        return{
            state
        }
        case 'USER_FOUND':
        return{
            state
        }
        default: 
            return state
    }
}
export default libraryReducer