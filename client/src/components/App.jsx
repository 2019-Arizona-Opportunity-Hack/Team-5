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
            <h1>Hello, world</h1>
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
