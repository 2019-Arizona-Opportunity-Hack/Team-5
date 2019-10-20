import React from "react";
import "../../../node_modules/materialize-css/dist/js/materialize";
import "../../../node_modules/materialize-css/dist/css/materialize.min.css";
// import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
// import NewUserForm from "../NewUserForm/index";
import { withRouter } from "react-router";
// import SignOut from "../SignOut";
// import { withAuthorization } from "../Session";

function HomePage(props) {
    // firebase.initializeApp(firebaseConfig);
    // let user = firebase.auth().currentUser;
    // console.log("THIS IS THE USER TOKEN:");
    // console.log(user.getToken());
    function handleClick(id) {
        props.history.push(id);
    }
    return (
        <div>
            <div className="row">
                <div className="col s12">
                    <h1>I am a Home Page!</h1>
                    <button id="existingUser" onClick={() => handleClick("/existinguser")}>
                        Check-In
                    </button>
                    <button id="newUser" onClick={() => handleClick("/newuser")}>
                        New User
                    </button>
                    <button id="dataResults" onClick={() => handleClick("/results")}>
                        Run a Report
                    </button>
                </div>
            </div>
        </div>
    );
}

export default withRouter(HomePage);
// const condition = authUser => Boolean(authUser);
// export default withAuthorization(condition)(HomePage)
