import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Page components
import HomePage from "./HomePage/index";
import QueryForm from "./QueryForm/index";
import DataResults from "./DataResults/index";
import NewUserForm from "./NewUserForm/index";
import UserSearch from "./UserSearch/index";
import UserProfile from "./UserProfile/index";
import Signin from "./SignIn/index";

export default function App() {
    return (
        <Router>
            <div>
                <nav>
                    <div className="nav-wrapper pink lighten-5">
                        <h4 className="brand-logo center pink-text text-darken-4">
                            Chandler Care Center
                        </h4>
                    </div>
                </nav>
            </div>
            <Route path="/" />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/signin" component={Signin} />
                <Route path="/query" component={QueryForm} />
                <Route path="/results" component={DataResults} />
                <Route path="/usersearch" component={UserSearch} />
                <Route path="/userprofile" component={UserProfile} />
                <Route path="/newuser" component={NewUserForm} />
            </Switch>
        </Router>
    );
}
