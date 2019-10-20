/* eslint-disable no-invalid-this */
import app from "firebase/app";
import "firebase/auth";
const config = {
    apiKey: "AIzaSyB5LyyY05yJI7NYVfjlVvdYIMd0rZ-HCrs",
    authDomain: "careconnect-eefc3.firebaseapp.com",
    databaseURL: "https://careconnect-eefc3.firebaseio.com",
    projectId: "careconnect-eefc3",
    storageBucket: "careconnect-eefc3.appspot.com",
    messagingSenderId: "363014939249",
    appId: "1:363014939249:web:d307b3b6b44f7c93a171d0",
    measurementId: "G-8LN4MSC1JW",
};
class Firebase {
    constructor() {
        app.initializeApp(config);
        this.auth = app.auth();
    }
    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);
    doSignOut = () => this.auth.signOut();
}
export default Firebase;
