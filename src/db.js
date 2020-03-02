import firebase from 'firebase/app'
import 'firebase/database'

var firebaseConfig = {
    apiKey: "AIzaSyBAlTM9jeN-bVBMJvpjZBs9NvFqzl2HZsE",
    authDomain: "elm-eta.firebaseapp.com",
    databaseURL: "https://elm-eta.firebaseio.com",
    projectId: "elm-eta",
    storageBucket: "elm-eta.appspot.com",
    messagingSenderId: "754457526701",
    appId: "1:754457526701:web:960775a7db9965df522124"
  };

// Get a Firestore instance
export const db = firebase
  .initializeApp(firebaseConfig)
  .database()

// Export types that exists in Firestore
// This is not always necessary, but it's used in other examples
//const { Timestamp, GeoPoint } = firebase.firestore
//export { Timestamp, GeoPoint }

// if using Firebase JS SDK < 5.8.0
//db.settings({ timestampsInSnapshots: true })