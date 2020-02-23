import Firebase from 'firebase';

let config = {
    apiKey: "AIzaSyBDVOFKvAHgdlcBIN4dZEQuCxEdcnLGEJ4",
    authDomain: "cookbook-76656.firebaseapp.com",
    databaseURL: "https://cookbook-76656.firebaseio.com",
    projectId: "cookbook-76656",
    storageBucket: "cookbook-76656.appspot.com",
    messagingSenderId: "580733093732",
    appId: "1:580733093732:web:b14cc1ea299ffde42b9c71"
};

let app = Firebase.initializeApp(config);
export const FirebaseStorage = app.storage();