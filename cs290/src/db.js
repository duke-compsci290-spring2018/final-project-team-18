// use Firebase as our database
import Firebase from 'firebase'

// configure and connect to database
var config = {
    apiKey: "AIzaSyCga8HBDnUCgjS7utee6JzcL_mytgBblOE",
    authDomain: "cs290-62ce7.firebaseapp.com",
    databaseURL: "https://cs290-62ce7.firebaseio.com",
    projectId: "cs290-62ce7",
    storageBucket: "cs290-62ce7.appspot.com",
    messagingSenderId: "143036517691"
  };
var fbApp = Firebase.initializeApp(config)

// global reference to remote database app
export const db = fbApp.database()
// global reference to remote storage
export const storageRef = fbApp.storage().ref()
// create useful endpoints within the database
export const imagesRef = db.ref('images')