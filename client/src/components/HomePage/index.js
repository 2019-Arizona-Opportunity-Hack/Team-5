import React from "react";
// import firebase from "firebase";
// import firebaseConfig from "../SignIn/firebase";

export default function HomePage() {
    // firebase.initializeApp(firebaseConfig);
    // let user = firebase.auth().currentUser;
    // console.log("THIS IS THE USER TOKEN:");
    // console.log(user.getToken());
    return (
        <div>
            <h1>HOMEPAGE</h1>
            <button>GET USER</button>
            <button>ADD USER</button>
            <button>GET DATA</button>
        </div>
    );
}
