const initState = {
    authError: null
}

const authReducer = (state = initState, action) => {
    switch(action.type) {
        case 'LOGIN_ERROR':
        console.log('login error')
        return {
            ...state,
            authError: 'Login falhou'
        }
        case 'LOGIN_SUCCESS':
        console.log('login success')
        return {
            ...state,
            authError: null
            }
        case 'SIGNOUT_SUCCESS':
        console.log('signout success')
        return {
            state
        }    
        case 'SIGNUP_SUCCESS':
        console.log('signup success')
        return {
            ...state,
            authError: null
        }
        case 'SIGNUP_ERROR':
        console.log('signup error')
        return {
            ...state,
            authError: action.err.message
        }
        case 'SIGNIN_FACE_SUCCESS':
        console.log('success????')
        return {
            ...state,
            authError: null
        }
        case 'SIGNIN_FACE_ERROR':
        console.log('ERORRRRSR?')
        return {
            ...state,
            authError: action.error.message
        }
        case 'SIGNIN_GOOGLE_SUCCESS':
        console.log('success????')
        return {
            ...state,
            authError: null
        }
        case 'SIGNIN_GOOGLE_ERROR':
        console.log('ERORRRRSR?')
        return {
            ...state,
            authError: action.error.message
        }
        case 'SIGNIN_TWITTER_SUCCESS':
        console.log('success????')
        return {
            ...state,
            authError: null
        }
        case 'SIGNIN_TWITTER_ERROR':
        console.log('ERORRRRSR?')
        return {
            ...state,
            authError: action.error.message
        }
        default: 
            return state
    }
    
}

export default authReducer