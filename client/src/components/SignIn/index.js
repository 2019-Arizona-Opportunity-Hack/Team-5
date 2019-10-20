// import { renderPlaygroundPage } from "@apollographql/graphql-playground-html/dist/render-playground-page";
import React from "react";
import firebaseConfig from "./firebase.js";
import firebase from "firebase";
import "firebaseui/dist/firebaseui.css";
import * as firebaseui from "firebaseui";

export default async function Signin() {
    firebase.initializeApp(firebaseConfig);
    let ui = new firebaseui.auth.AuthUI(firebase.auth());
    let uiConfig = {
        signInSuccessUrl: "homepage",
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.EmailAuthProvider.PROVIDER_ID,
        ],
        // tosUrl and privacyPolicyUrl accept either url string or a callback
        // function.
        // Terms of service url/callback.
        tosUrl: "<your-tos-url>",
        // Privacy policy url/callback.
        privacyPolicyUrl: function() {
            window.location.assign("<your-privacy-policy-url>");
        },
    };
    ui.start("#firebaseui-auth-container", uiConfig);
    console.log("fire started");
    let user = await firebase.auth().currentUser.uid;
    console.log(user);
    return <div id="firebaseui-auth-container"></div>;
}
