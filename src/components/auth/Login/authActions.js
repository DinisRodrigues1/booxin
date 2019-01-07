import { facebookProvider, googleProvider, twitterProvider } from "../../../config/fbConfig";

export const signIn = (credentials) => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase()

        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            dispatch ({ type: 'LOGIN_SUCCESS' })
        }).catch((err) => {
            dispatch({ type: 'LOGIN_ERROR', err })
        })
    }
}

export const signOut = () => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase()

        firebase.auth().signOut().then(() => {
            dispatch({ type: 'SIGNOUT_SUCCESS' })
        })
    }
}

export const signUp = (newUser) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firebase = getFirebase()
        const firestore = getFirestore()

        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((response) => {
            return firestore.collection('users').doc(response.user.uid).set({
                userName: newUser.userName
         
        })
        }).then(() => {
            dispatch({ type: 'SIGNUP_SUCCESS' })
        }).catch(err =>{
            dispatch({ type: 'SIGNUP_ERROR', err })
        })
    }
}

export const signUpFacebook = () => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase()
    firebase.auth().signInWithPopup(facebookProvider).then((result) => {
        console.log("HERE?")
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var token = result.credential.accessToken;
        
        // The signed-in user info.
        var user = result.user.displayName;
        
        // ...
      }).then(() =>
            dispatch({ type: 'SIGNIN_FACE_SUCCESS' }))
        .catch(error => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            dispatch({ type: 'SIGNIN_FACE_ERROR', error })
            // ...
        });
    } 
} 

export const signUpTwitter = () => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase()
    firebase.auth().signInWithPopup(twitterProvider).then((result) => {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
      }).then(() =>
            dispatch({ type: 'SIGNIN_TWITTER_SUCCESS' }))
        .catch(error => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            dispatch({ type: 'SIGNIN_TWITTER_ERROR', error })
            // ...
        });
    } 
} 

export const signUpGoogle = () => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase()
    firebase.auth().signInWithPopup(googleProvider).then((result) => {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
      }).then(() =>
            dispatch({ type: 'SIGNIN_GOOGLE_SUCCESS' }))
        .catch(error => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            dispatch({ type: 'SIGNIN_GOOGLE_ERROR', error })
            // ...
        });
    } 
}

export const changePw = (credentials) => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase()
        const auth = firebase.auth()
        const emailAddress = credentials.email
    auth.sendPasswordResetEmail(emailAddress).then(() => {
        // Email sent.
        dispatch({ type: 'PW_CHANGE_SUCCESS' })
        }).catch(function(error) {
        // An error happened.
        dispatch({ type: 'PW_CHANGE_ERROR', error })
        });
    }
}
