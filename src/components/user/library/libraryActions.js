export const addToLibrary = (book) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {

        const firestore = getFirestore();
        const profile = getState().firebase.profile.userName
        const authorId = getState().firebase.auth.uid
        const displayName = getState().firebase.auth.displayName

        if (profile != undefined) {
        firestore.collection('books').add({
            book_isbn: book,
            user: profile,
            user_id: authorId,
            date: new Date()
        }).then(() => {
            dispatch({ type: 'ADD_TO_LIBRARY_SUCCESS', book })
        }).catch((err) => {
            dispatch({ type: 'ADD_TO_LIBRARY_ERROR', err })
        })
        } else {
        firestore.collection('books').add({
            book_isbn: book,
            displayName: displayName,
            user_id: authorId,
            date: new Date()
        }).then(() => {
            dispatch({ type: 'ADD_TO_LIBRARY_SUCCESS', book })
        }).catch((err) => {
            dispatch({ type: 'ADD_TO_LIBRARY_ERROR', err })
        })
    }
    }
}

export const getUserBooks = () => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {

        const firebase = getFirebase()
        const firestore = getFirestore()
        const user = firebase.auth().currentUser
        const profile = getState().firebase.profile.userName
        let name, email, uid

        if (user.displayName != null) {
            name = user.displayName
            email = user.email
            uid = user.uid
            
            console.log(name, email, uid)
            dispatch({ type: 'USER_DATA_SUCCESS' })
        }
        else {
            uid = user.uid
            email = user.email

            console.log(email, uid, profile)
            dispatch({ type: 'USER_DATA_SUCCESS' })
        }
        
          
    }
}

export const getAllUserBooks = () => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {

        const firebase = getFirebase()
        const firestore = getFirestore()
        const profile = getState().firebase.profile.userName
      
            dispatch({ type: 'ALL_USER_DATA_SUCCESS' })
        }
        
          
    }

export const deleteFromLibrary = (id) => {
        return (dispatch, getState, { getFirebase, getFirestore }) => {
            
            const firestore = getFirestore()
            const firebase = getFirebase()
            const db = firebase.firestore()
            console.log(id)
           
            db.collection("books").get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.data().book_isbn + "=>" + id, firestore._.authUid + "=>" + doc.data().user_id)
            if (doc.data().book_isbn == id && firestore._.authUid == doc.data().user_id) {
                console.log(doc.data().book_isbn + "=>" + id, firestore._.authUid + "=>" + doc.data().user_id)
                console.log('hghgfgdfdfss')
                db.collection("books").doc(doc.id).delete().then(() => {
                    console.log("Document deleted!")
                    dispatch({ type: 'DELETE_SUCCESS' })
                }).catch((error) => {
                    console.log("Error", error)
                })
            }
            else{console.log("nada")}
            });
    });
        
}}

// APAGA MAS PRECISA DE ATUALIZAR A PÁGINA