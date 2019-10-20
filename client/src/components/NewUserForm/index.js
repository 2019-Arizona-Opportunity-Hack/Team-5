/* eslint-disable class-methods-use-this */
import React, { Component } from "react";
import M from "../../../node_modules/materialize-css/dist/js/materialize.min.js";
import "../../../node_modules/materialize-css/dist/js/materialize";
import "../../../node_modules/materialize-css/dist/css/materialize.min.css";
import AddMember from "./AddMember";

export default class newUserForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            yesAdditional: "",
            headValues: {},
            additionalValues: {},
        };
    }
    componentDidMount() {
        console.log(M);
        M.AutoInit();
    }

    // promiseSetState = state =>
    //     new Promise(resolve => {
    //         this.setState(state, resolve);
    //     });
    render() {
        return (
            <>
                <div className="container">
                    <form className="col s12" action="#">
                        <div className="row">
                            <h5 className="col s12">Personal Information</h5>
                        </div>
                        <div className="row">
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
                                <input id="phone_number" type="number" />
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
                            <div className="input-field col s6">
                                <select>
                                    <option value="" disabled selected>
                                        Choose your option
                                    </option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                                <label>Gender</label>
                            </div>
                            <div className="input-field col s6">
                                <select>
                                    <option value="" disabled selected>
                                        Choose your option
                                    </option>
                                    <option value="single">Single</option>
                                    <option value="married">Married</option>
                                    <option value="divorced">Divorced</option>
                                    <option value="separated">Separated</option>
                                    <option value="widowed">Widowed</option>
                                    <option value="undisclosed">Undisclosed</option>
                                </select>
                                <label>Marital Status</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s6">
                                <select>
                                    <option value="" disabled selected>
                                        Choose your option
                                    </option>
                                    <option value="breastfeeding">Breastfeeding</option>
                                    <option value="eisability">Disability</option>
                                    <option value="elderly">Elderly (62+)</option>
                                    <option value="female-HOH">
                                        Female Head of Head of Household
                                    </option>
                                    <option value="LGBTQ">LGBTQ</option>
                                    <option value="mental-Illness">Mentall Illness</option>
                                    <option value="postpartum">Postpartum</option>
                                    <option value="pregnant">Pregnant</option>
                                    <option value="veteran">Veteran</option>
                                    <option value="other">Other</option>
                                    <option value="undisclosed">Undisclosed</option>
                                </select>
                                <label>Self Identification</label>
                            </div>
                            <div className="input-field col s6">
                                <select>
                                    <option value="" disabled selected>
                                        Choose your option
                                    </option>
                                    <option value="white">White/Anglo</option>
                                    <option value="black">Black/African-American</option>
                                    <option value="latino">Hispanic/Latino</option>
                                    <option value="native">American Indian/Native American</option>
                                    <option value="asian">Asian</option>
                                    <option value="alaskan">Alaska Native/Aleut/Eskimo</option>
                                    <option value="middle-eastern">
                                        Middle-Eastern/North-African
                                    </option>
                                    <option value="pacific">Pacific Islander</option>
                                    <option value="other">Other</option>
                                    <option value="undisclosed">Undisclosed</option>
                                </select>
                                <label>Ethnicity</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s6">
                                <select>
                                    <option value="" disabled selected>
                                        Choose your option
                                    </option>
                                    <option value="english">English</option>
                                    <option value="spanish">Spanish</option>
                                    <option value="other">Other</option>
                                </select>
                                <label>Primary Language</label>
                            </div>
                            <div className="input-field col s6">
                                <select>
                                    <option value="" disabled selected>
                                        Choose your option
                                    </option>
                                    <option value="emercency">
                                        Emergency Shelter/Mission/Transitional
                                    </option>
                                    <option value="evacuee">Evacuee</option>
                                    <option value="own">Own Home</option>
                                    <option value="rent">Private Rental</option>
                                    <option value="public">Public Housing</option>
                                    <option value="unhoused">Unhoused</option>
                                    <option value="family">With Family/Friends</option>
                                    <option value="youth-home">Youth Home/Shelter</option>
                                    <option value="refugee">Refugee</option>
                                    <option value="other">Other</option>
                                    <option value="undisclosed">Undisclosed</option>
                                </select>
                                <label>Housing Type</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s6">
                                <select>
                                    <option value="" disabled selected>
                                        Choose your option
                                    </option>
                                    <option value="elementary">Grades 0-8</option>
                                    <option value="middle">Grades 9-11</option>
                                    <option value="high-school">High School Diploma</option>
                                    <option value="GED">GED</option>
                                    <option value="post-secondary">Post Secondary</option>
                                    <option value="tradeschool">Tradeschool</option>
                                    <option value="two-year">Two Year Degree</option>
                                    <option value="four-year">Four Year Degree</option>
                                    <option value="masters">Masters Degree</option>
                                    <option value="PHD">PhD</option>
                                    <option value="undisclosed">Undisclosed</option>
                                </select>
                                <label>Education Level</label>
                            </div>
                            <div className="input-field col s6">
                                <select>
                                    <option value="" disabled selected>
                                        Choose your option
                                    </option>
                                    <option value="student">Post Secondary Student</option>
                                    <option value="full-time">Full-Time</option>
                                    <option value="part-time">Part Time</option>
                                    <option value="retired">Retired</option>
                                    <option value="none">Unemployed</option>
                                    <option value="other">Other</option>
                                    <option value="undisclosed">Undisclosed</option>
                                </select>
                                <label>Employment Type</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s6">
                                <input id="income" type="number" placeholder="USD" />
                                <label htmlFor="income">Monthly Income</label>
                            </div>
                            <div className="input-field col s6">
                                <select>
                                    <option value="" disabled selected>
                                        Choose your option
                                    </option>
                                    <option value="commodity">
                                        Commodity Supplemental Food Program (CSFP)
                                    </option>
                                    <option value="wic">Supplemental Assistance WIC</option>
                                    <option value="snap">
                                        Supplemental Nutrition Assistance Program (SNAP)
                                    </option>
                                    <option value="tanf">Cash Assistant (TANF)</option>
                                    <option value="des">DES Child Care Subsidy</option>
                                    <option value="quality">Quality First Scholarship</option>
                                    <option value="other">Other</option>
                                </select>
                                <label>Incompe Type</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s6">
                                <select>
                                    <option value="" disabled selected>
                                        Choose your option
                                    </option>
                                    <option value="self">I take care of my child at home</option>
                                    <option value="partner">
                                        My partner takes care of my child at home
                                    </option>
                                    <option value="head-start">Head start</option>
                                    <option value="day-care">
                                        Child care center/Preschool Program
                                    </option>
                                    <option value="family">Family child care home</option>
                                    <option value="relative">
                                        Relative/neighbor or babysitter
                                    </option>
                                </select>
                                <label>Child Care Type</label>
                            </div>
                            <div className="input-field col s6">
                                <select>
                                    <option value="" disabled selected>
                                        Choose your option
                                    </option>
                                    <option value="emplyer">Employer</option>
                                    <option value="private">Private</option>
                                    <option value="ahcccs">AHCCCS</option>
                                    <option value="indian">Indian Healtch Services</option>
                                    <option value="military">Military</option>
                                    <option value="none">None</option>
                                    <option value="other">Other</option>
                                </select>
                                <label>Medical Insurance Type</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s6">
                                <select>
                                    <option value="" disabled selected>
                                        Choose your option
                                    </option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                                <label>Do you have a Primary Doctor?</label>
                            </div>
                            <div className="input-field col s6">
                                <select>
                                    <option value="" disabled selected>
                                        Choose your option
                                    </option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                                <label>Dental Insurance</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <select
                                    value={this.state.yesAdditional}
                                    onChange={event =>
                                        this.setState({ yesAdditional: event.target.value })
                                    }
                                >
                                    <option value="" disabled>
                                        Choose your option
                                    </option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                                <label>Do you have additional Household Members?</label>
                            </div>
                        </div>
                        <div className="row">
                            {this.state.yesAdditional === "yes" ? (
                                <div>
                                    <h5>Household Member Information</h5>
                                    <AddMember />
                                </div>
                            ) : (
                                <h5>All information is confidential.</h5>
                            )}
                        </div>
                        <button class="btn waves-effect waves-light" type="submit" name="action">
                            Submit
                        </button>
                    </form>
                </div>
            </>
        );
    }
}
