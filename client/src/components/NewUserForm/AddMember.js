/* eslint-disable class-methods-use-this */
import React, { Component } from "react";
import { FieldArray } from "formik";
import M from "../../../node_modules/materialize-css/dist/js/materialize.min.js";
import "../../../node_modules/materialize-css/dist/js/materialize";
import "../../../node_modules/materialize-css/dist/css/materialize.min.css";

export default class AddMember extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         additionalMember: [],
    //     };
    // }

    // handMemberChange = idx => evt => {
    //     const newMember = this.state.additionalMembers.map((newMember, midx) => {
    //         if (idx !== midx) return member;
    //         return { ...member, name: evt.target.vale };
    //     });
    //     this.setState({ additionalMember: newMembers });
    // };

    // handleAddMember = () => {
    //     this.setState({
    //         member: this.state.member.concat([{ name: " " }]),
    //     });
    // };
    componentDidMount() {
        console.log(M);
        M.AutoInit();
    }

    render() {
        return (
            <>
                <FieldArray
                    name="additionalMembers"
                    render={arrayHelpers => (
                        <div>
                            {/* {additionalMember.map(member => ( */}
                            <div>
                                <div className="row">
                                    <div className="input-field col s4">
                                        <input id="first_name" type="text" />
                                        <label htmlFor="first_name">First Name</label>
                                    </div>
                                    <div className="input-field col s4">
                                        <input id="last_name" type="text" />
                                        <label htmlFor="last_name">Last Name</label>
                                    </div>
                                    <div className="input-field col s4">
                                        <input id="date_of_birth" type="number" />
                                        <label htmlFor="date_of_birth">Date of Birth</label>
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
                                            <option value="sibling">Sibling</option>
                                            <option value="spouse">Spouse</option>
                                            <option value="child">Child</option>
                                            <option value="parent">Parent</option>
                                            <option value="guardian">Guardian</option>
                                            <option value="grandparent">Grandparent</option>
                                            <option value="foster">Foster Parent</option>
                                        </select>
                                        <label>Relationship</label>
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
                                            <option value="native">
                                                American Indian/Native American
                                            </option>
                                            <option value="asian">Asian</option>
                                            <option value="alaskan">
                                                Alaska Native/Aleut/Eskimo
                                            </option>
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
                                <div className="row"></div>
                            </div>
                            {/* ))} */}
                        </div>
                    )}
                />
            </>
        );
    }
}
