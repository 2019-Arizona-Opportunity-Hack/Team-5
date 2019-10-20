import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { withFirebase } from "./Firebase";
import { withAuthentication } from "./Session";
// import "./App.css";

// Page components
import HomePage from "./HomePage/index";
import QueryForm from "./QueryForm/index";
import DataResults from "./DataResults/index";
import NewUserForm from "./NewUserForm/index";
import UserSearch from "./UserSearch/index";
import UserProfile from "./UserProfile/index";
import Signin from "./SignIn/index";

// class App extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             authUser: null,
//         };
//     }
//     componentDidMount() {
//         this.props.firebase.auth.onAuthStateChanged(authUser => {
//             authUser ? this.setState({ authUser }) : this.setState({ authUSer: null });
//         });
//     }
//     render() {
//         return (
const App = () => 
    <Router>
        <h1>Hello, world</h1>
        <Route path="/" />
        <Switch>
            <Route exact path="/" component={Signin} />
            <Route path="/homepage" component={HomePage} />
            <Route path="/signin" component={Signin} />
            <Route path="/query" component={QueryForm} />
            <Route path="/results" component={DataResults} />
            <Route path="/usersearch" component={UserSearch} />
            <Route path="/userprofile" component={UserProfile} />
            <Route path="/newuser" component={NewUserForm} />
        </Switch>
    </Router>
;
//     }
// }

export default withAuthentication(App);
