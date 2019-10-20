/* eslint-disable class-methods-use-this */
import React, { Component } from "./node_modules/react";
import M from "./node_modules/materialize-css/dist/js/materialize.min.js.js";
import "./node_modules/materialize-css";
import "./node_modules/materialize-css/dist/css/materialize.min.css";

export default class newUserForm extends Component {
    componentDidMount() {
        console.log(M);
        M.AutoInit();
    }
    render() {
        return (
            <div className="container">
                <form className="col s12">
                    <div className="row">
                        <h4 className="col s12">Personal Information</h4>
                        <div className="input-field col s6">
                            <input id="first_name" type="text" />
                            <label htmlFor="first_name">First Name</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="last_name" type="text" />
                            <label htmlFor="last_name">Last Name</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="date_of_birth" type="text" />
                            <label htmlFor="date_of_birth">Date of Birth</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="phone_number" type="text" />
                            <label htmlFor="phone_number">Phone Number</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s5">
                            <input id="address" type="text" />
                            <label htmlFor="address">Address</label>
                        </div>
                        <div className="input-field col s5">
                            <input id="city" type="text" />
                            <label htmlFor="city">City</label>
                        </div>
                        <div className="input-field col s2">
                            <input id="zip" type="text" />
                            <label htmlFor="zip">Zip Code</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <select>
                                <option value="" disabled selected>
                                    Choose your option
                                </option>
                                <option value="1">Option 1</option>
                                <option value="2">Option 2</option>
                                <option value="3">Option 3</option>
                            </select>
                            <label>Gender</label>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}
