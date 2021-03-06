import React from "react";
import initMaterialize from "../../../utils/initMaterialize";
// import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
// import NewUserForm from "../NewUserForm/index";
import { withRouter } from "react-router";
// import SignOut from "../SignOut";
// import { withAuthorization } from "../Session";

initMaterialize();

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
                <div className="row">
                    <div className="col s12">
                        <div className="card white">
                            <div className="card-content pink-text text-darken-4 center">
                                <h1>Welcome</h1>
                                <br />
                                <div className="row">
                                    <div className="col s3"></div>
                                    <button
                                        id="existingUser"
                                        className="waves-effect waves btn-large pink darken-4 col s6"
                                        onClick={() => handleClick("/existinguser")}
                                    >
                                        Check-In
                                    </button>
                                    <div className="col s3"></div>
                                </div>
                                <div className="row">
                                    <div className="col s3"></div>
                                    <button
                                        id="newUser"
                                        className="waves-effect waves btn-large pink darken-4 col s6"
                                        onClick={() => handleClick("/newuser")}
                                    >
                                        New User
                                    </button>
                                    <div className="col s3"></div>
                                </div>
                                <div className="row">
                                    <div className="col s3"></div>
                                    <button
                                        id="dataResults"
                                        className="waves-effect waves btn-large pink darken-4 col s6"
                                        onClick={() => handleClick("/results")}
                                    >
                                        Run a Report
                                    </button>
                                    <div className="col s3"></div>
                                </div>
                                <br />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default withRouter(HomePage);
// const condition = authUser => Boolean(authUser);
// export default withAuthorization(condition)(HomePage)
