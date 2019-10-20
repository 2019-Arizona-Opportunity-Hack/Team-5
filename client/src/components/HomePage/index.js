import React from "react";
import SignOut from "../SignOut";
import { withAuthorization } from "../Session";

function HomePage() {
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
            <SignOut />
        </div>
    );
}
const condition = authUser => Boolean(authUser);
export default withAuthorization(condition)(HomePage);
