import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyC16FQ2li0pIQp0mS6ckKfgYlMGMlpkx8g",
    authDomain: "react-todo-firestore.firebaseapp.com",
    projectId: "react-todo-firestore",
    storageBucket: "react-todo-firestore.appspot.com",
    messagingSenderId: "743846240224",
    appId: "1:743846240224:web:746bda53f6e9fde2561585",
    measurementId: "G-2PDQWEYDDT",
}
// Initialize Firebase
const todoFirebase = firebase.initializeApp(firebaseConfig)

export { todoFirebase }
