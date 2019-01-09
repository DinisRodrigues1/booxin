const initState = {
    authError: null
}

const authReducer = (state = initState, action) => {
    switch(action.type) {
        case 'LOGIN_ERROR':
        return {
            ...state,
            authError: 'Login falhou'
        }
        case 'LOGIN_SUCCESS':
        return {
            ...state,
            authError: null
            }
        case 'SIGNOUT_SUCCESS':
        return {
            state
        }    
        case 'SIGNUP_SUCCESS':
        return {
            ...state,
            authError: null
        }
        case 'SIGNUP_ERROR':
        return {
            ...state,
            authError: action.err.message
        }
        case 'SIGNIN_FACE_SUCCESS':
        return {
            ...state,
            authError: null
        }
        case 'SIGNIN_FACE_ERROR':
        return {
            ...state,
            authError: action.error.message
        }
        case 'SIGNIN_GOOGLE_SUCCESS':
        return {
            ...state,
            authError: null
        }
        case 'SIGNIN_GOOGLE_ERROR':
        return {
            ...state,
            authError: action.error.message
        }
        case 'SIGNIN_TWITTER_SUCCESS':
        return {
            ...state,
            authError: null
        }
        case 'SIGNIN_TWITTER_ERROR':
        return {
            ...state,
            authError: action.error.message
        }
        case 'PW_CHANGE_SUCCESS':
        return {
            ...state,
            authError: null
        }
        case 'PW_CHANGE_ERROR':
        return {
            ...state,
            authError: action.error.message
        }
        default: 
            return state
    
    }
    
}

export default authReducer