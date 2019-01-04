 import firebase from 'firebase/app'
 import 'firebase/firestore'
 import 'firebase/auth'
 
 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyAfIradYqIMuJ05QGPMrRWCQnLayD0uR-M",
    authDomain: "boox-1337.firebaseapp.com",
    databaseURL: "https://boox-1337.firebaseio.com",
    projectId: "boox-1337",
    storageBucket: "boox-1337.appspot.com",
    messagingSenderId: "551729703248"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true })

  export default firebase;