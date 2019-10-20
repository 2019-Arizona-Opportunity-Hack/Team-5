import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Page components
import HomePage from "./screens/HomePage";
import QueryForm from "./screens/QueryForm";
import DataResults from "./screens/DataResults";
import NewUserForm from "./screens/NewUserForm";
import UserSearch from "./screens/UserSearch";
import UserProfile from "./screens/UserProfile";
import Signin from "./screens/SignIn";

export default function App() {
    return (
        <Router>
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
