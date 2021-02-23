import firebase from 'firebase'
  // Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCNz2gli2j-IdMc0kYqI5w96DKxYYhx3yQ",
    authDomain: "newspaperapp-70af3.firebaseapp.com",
    databaseURL: "https://newspaperapp-70af3-default-rtdb.firebaseio.com",
    projectId: "newspaperapp-70af3",
    storageBucket: "newspaperapp-70af3.appspot.com",
    messagingSenderId: "230813617813",
    appId: "1:230813617813:web:434bc90da129e9882ad59c"
  };
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase.database();