import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDUwvv4RKmoMZs83lYK-hxMwcLc27KeXgQ",
    authDomain: "tinder-clone-0383725.firebaseapp.com",
    projectId: "tinder-clone-0383725",
    storageBucket: "tinder-clone-0383725.appspot.com",
    messagingSenderId: "257618421655",
    appId: "1:257618421655:web:f9ebc6e37b341d129a06d2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default database;