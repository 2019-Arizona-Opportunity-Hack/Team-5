import { renderPlaygroundPage } from "@apollographql/graphql-playground-html/dist/render-playground-page";
import React from "react";
import firebaseConfig from "./firebase.js";
const firebase = require("firebase");
const firebaseui = require("firebaseui");
const ui = new firebaseui.auth.AuthUI(firebase.auth());

export default function Signin() {
    firebase.initializeApp(firebaseConfig);
    return <div>{ui}</div>;
}
