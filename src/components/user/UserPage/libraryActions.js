export const addToLibrary = (book) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {

        const firestore = getFirestore();
        const profile = getState().firebase.profile.userName;
        const authorId = getState().firebase.auth.uid;
        const displayName = getState().firebase.auth.displayName;
        firestore.collection('books').add({
            book_isbn: book,
            user: profile,
            displayName: displayName, //CHECK IF CORRECT
            user_id: authorId,
            date: new Date()
        }).then(() => {
            dispatch({ type: 'ADD_TO_LIBRARY_SUCCESS', book })
        }).catch((err) => {
            dispatch({ type: 'ADD_TO_LIBRARY_ERROR', err })
        })
    }
}