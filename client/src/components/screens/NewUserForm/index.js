/* eslint-disable no-invalid-this */
/* eslint-disable class-methods-use-this */
import React, { Component } from "react";
import Input from "../../form/Input";
import Dropdown, { Option } from "../../form/Dropdown";
import Row from "../../form/Row";
import initMaterialize from "../../../utils/initMaterialize";
import gql from "graphql-tag";
import ApolloClient from "apollo-boost";
import { withRouter } from "react-router-dom";

const NEW_USER = gql`
    mutation newUser($user: UserInput!, $household: [UserInput]) {
        newUser(user: $user, household: $household) {
            success
        }
    }
`;

const client = new ApolloClient();

class NewUserForm extends Component {
    state = {
        firstName: "",
        lastName: "",
        familyMemberCount: 0,
        household: [],
    };

    componentDidMount() {
        initMaterialize();
    }

    spliceHousehold(atIndex, change) {
        let householdMutation = this.state.household;
        householdMutation.splice(atIndex, 1, change);
        this.setState({ household: householdMutation });
    }

    componentDidUpdate() {
        const { familyMemberCount, household } = this.state;
        if (familyMemberCount > household.length) {
            this.setState({ household: [...household, {}] });
        }
    }

    onSubmit = event => {
        event.preventDefault();
        const userData = this.state;
        const household = userData.household;
        userData.household = undefined;
        userData.familyMemberCount = undefined;
        client
            .mutate({
                mutation: NEW_USER,
                variables: {
                    user: userData,
                    household: household,
                },
            })
            .then(response => {
                this.props.history.push("/userprofile");
            })
            .catch(err => {
                console.log(err);
            });
    };

    render() {
        return (
            <>
                <div className="container" style={{ padding: "24px" }}>
                    <form className="col s12" onSubmit={this.onSubmit}>
                        <Row>
                            <h5 className="col s12">Personal Information</h5>
                        </Row>
                        <ul className="collection">
                            <li className="collection-item">
                                <Row>
                                    <Input
                                        id="first_name"
                                        label="First name"
                                        onChange={firstName => this.setState({ firstName })}
                                        required
                                    />
                                    <Input
                                        id="last_name"
                                        label="Last name"
                                        onChange={lastName => this.setState({ lastName })}
                                        required
                                    />
                                </Row>
                                <Row>
                                    <Input
                                        id="date_of_birth"
                                        label="Date of Birth"
                                        type="Date"
                                        onChange={dateOfBirth => this.setState({ dateOfBirth })}
                                    />
                                    <Input
                                        id="phone_number"
                                        label="Phone Number"
                                        onChange={phoneNumber => this.setState({ phoneNumber })}
                                    />
                                </Row>
                                <Row>
                                    <Input
                                        id="address"
                                        label="Address"
                                        onChange={address => this.setState({ address })}
                                    />
                                    <Input
                                        id="city"
                                        label="City"
                                        onChange={city => this.setState({ city })}
                                    />
                                    <Input
                                        id="zip"
                                        label="Zip"
                                        onChange={zipCode =>
                                            this.setState({ zipCode: parseFloat(zipCode) })
                                        }
                                    />
                                </Row>
                                <Row>
                                    <Dropdown
                                        label="Gender"
                                        onChange={gender => this.setState({ gender })}
                                    >
                                        <Option value="Male" />
                                        <Option value="Female" />
                                        <Option value="Other" />
                                    </Dropdown>
                                    <Dropdown
                                        label="Martical Status"
                                        onChange={maritalStatus => this.setState({ maritalStatus })}
                                    >
                                        <Option value="Single" />
                                        <Option value="Married" />
                                        <Option value="Divorced" />
                                        <Option value="Separated" />
                                        <Option value="Widowed" />
                                        <Option value="Undisclosed" />
                                    </Dropdown>
                                </Row>
                                <Row>
                                    <Dropdown
                                        label="Self identification"
                                        onChange={selfIdentification =>
                                            this.setState({ selfIdentification })
                                        }
                                    >
                                        <Option value="Breastfeeding" />
                                        <Option value="Disability" />
                                        <Option value="Elderly" />
                                        <Option value="Female Head of Household" />
                                        <Option value="LGBTQ" />
                                        <Option value="Mental Illness" />
                                        <Option value="Postpartum" />
                                        <Option value="Pregnant" />
                                        <Option value="Veteran" />
                                        <Option value="Other" />
                                        <Option value="Undisclosed" />
                                    </Dropdown>
                                    <Dropdown label="Ethnicitiy">
                                        <Option value="White" />
                                        <Option value="Black/African American" />
                                        <Option value="Hispanic/Lation" />
                                        <Option value="American Indian/Native American" />
                                        <Option value="Asian" />
                                        <Option value="Alaskan Native/Aleut/Eskimo" />
                                        <Option value="Middle Eastern" />
                                        <Option value="Pacific Islander" />
                                        <Option value="Other" />
                                        <Option value="Undisclosed" />
                                    </Dropdown>
                                </Row>
                                <Row>
                                    <Dropdown
                                        label="Language"
                                        onChange={primaryLanguage =>
                                            this.setState({ primaryLanguage })
                                        }
                                    >
                                        <Option value="English" />
                                        <Option value="Spanish" />
                                        <Option value="Other" />
                                    </Dropdown>
                                    <Dropdown
                                        label="Housing Type"
                                        onChange={housingType => {
                                            this.setState({ housingType });
                                        }}
                                    >
                                        <Option value="Evacuee" />
                                        <Option value="Own" />
                                        <Option value="Private Rental" />
                                        <Option value="Public Housing" />
                                        <Option value="Unhoused" />
                                        <Option value="With Family/Friends" />
                                        <Option value="Youth Home/Shelter" />
                                        <Option value="Refugee" />
                                        <Option value="Other" />
                                        <Option value="Undisclosed" />
                                    </Dropdown>
                                </Row>
                                <Row>
                                    <Dropdown
                                        label="Education Level"
                                        onChange={educationLevel =>
                                            this.setState({ educationLevel })
                                        }
                                    >
                                        <Option value="Elementary (Grades 0-8)" />
                                        <Option value="Middle School (Grades 9-11)" />
                                        <Option value="High School Diploma" />
                                        <Option value="GED" />
                                        <Option value="Post Secondary" />
                                        <Option value="Tradeschool" />
                                        <Option value="Two Year Degree" />
                                        <Option value="Four Year Degree" />
                                        <Option value="Masters" />
                                        <Option value="PhD" />
                                        <Option value="Undisclosed" />
                                    </Dropdown>
                                    <Dropdown
                                        label="Employment Type"
                                        onChange={employmentType =>
                                            this.setState({ employmentType })
                                        }
                                    >
                                        <Option value="Post Secondary Student" />
                                        <Option value="Full-time" />
                                        <Option value="Part-time" />
                                        <Option value="Retired" />
                                        <Option value="Unemployed" />
                                        <Option value="Other" />
                                        <Option value="Undisclosed" />
                                    </Dropdown>
                                </Row>
                                <Row>
                                    <Input
                                        type="number"
                                        id="income"
                                        label="Monthly Income"
                                        onChange={monthlyIncome =>
                                            this.setState({
                                                monthlyIncome: parseFloat(monthlyIncome),
                                            })
                                        }
                                    />
                                    <Dropdown
                                        label="Income Type"
                                        onChange={monthlyIncomeType =>
                                            this.setState({ monthlyIncomeType })
                                        }
                                    >
                                        <Option value="Commodity Supplemental Food Program (CSFP)" />
                                        <Option value="Supllemental Assistance WIC" />
                                        <Option value="Supplemental Nutrition Assistance Program (SNAP)" />
                                        <Option value="Cash Assistant (TANF)" />
                                        <Option value="DES Child Care Subsidy" />
                                        <Option value="Quality First Scholarship" />
                                        <Option value="Other" />
                                    </Dropdown>
                                </Row>
                                <Row>
                                    <Dropdown
                                        label="Child Care Type"
                                        onChange={childCareType => this.setState({ childCareType })}
                                    >
                                        <Option value="I take care of my child at home" />
                                        <Option value="My partner takes care of my child at home" />
                                        <Option value="Head start" />
                                        <Option value="Child care center/Preschool Program" />
                                        <Option value="Family child care home" />
                                        <Option value="Relative, Neightbor, or Babysitter" />
                                    </Dropdown>
                                    <Dropdown
                                        label="Medical Insurance Type"
                                        onChange={medicalInsuranceType => {
                                            this.setState({ medicalInsuranceType });
                                        }}
                                    >
                                        <Option value="Employer" />
                                        <Option value="Private" />
                                        <Option value="AHCCCS" />
                                        <Option value="Indian Health Services" />
                                        <Option value="None" />
                                        <Option value="Other" />
                                    </Dropdown>
                                </Row>
                                <Row>
                                    <Dropdown
                                        label="Do you have a Primary Doctor?"
                                        onChange={hasPrimaryDoc =>
                                            this.setState({
                                                hasPrimaryDoctor: hasPrimaryDoc === "Yes",
                                            })
                                        }
                                    >
                                        <Option value="Yes" />
                                        <Option value="No" />
                                    </Dropdown>
                                    <Dropdown
                                        label="Do you have Dental Insurance?"
                                        onChange={hasDentalInsurance =>
                                            this.setState({
                                                hasDentalInsurance: hasDentalInsurance === "Yes",
                                            })
                                        }
                                    >
                                        <Option value="Yes" />
                                        <Option value="No" />
                                    </Dropdown>
                                </Row>
                            </li>
                        </ul>
                        {this.state.household.map((familyMember, familyMemberIndex) => {
                            return (
                                <div className="col s12" key={familyMemberIndex}>
                                    <Row>
                                        <h5 className="col s12">
                                            {familyMember.firstName
                                                ? familyMember.firstName
                                                : `Family Member ${familyMemberIndex + 1}`}
                                        </h5>
                                    </Row>
                                    <ul className="collection">
                                        <li className="collection-item">
                                            <Row>
                                                <Input
                                                    id={"firstName_" + familyMemberIndex}
                                                    label="First Name"
                                                    width={4}
                                                    onChange={firstName =>
                                                        this.spliceHousehold(familyMemberIndex, {
                                                            ...familyMember,
                                                            firstName,
                                                        })
                                                    }
                                                />
                                                <Input
                                                    id={"lastName_" + familyMemberIndex}
                                                    label="Last Name"
                                                    width={4}
                                                    onChange={lastName =>
                                                        this.spliceHousehold(familyMemberIndex, {
                                                            ...familyMember,
                                                            lastName,
                                                        })
                                                    }
                                                />
                                                <Input
                                                    id={"dob_" + familyMemberIndex}
                                                    label="Date of Birth"
                                                    width={4}
                                                    onChange={dob => {
                                                        this.spliceHousehold(familyMemberIndex, {
                                                            ...familyMember,
                                                            dateOfBirth: dob,
                                                        });
                                                    }}
                                                />
                                            </Row>
                                        </li>
                                    </ul>
                                </div>
                            );
                        })}
                        <div style={{ paddingTop: "10px" }}>
                            {this.state.familyMemberCount < 8 && (
                                <button
                                    className="btn grey darken-1"
                                    type="button"
                                    style={{ marginRight: "10px" }}
                                    onClick={() =>
                                        this.setState({
                                            familyMemberCount: Math.min(
                                                this.state.familyMemberCount + 1,
                                                8
                                            ),
                                        })
                                    }
                                >
                                    Add family member
                                </button>
                            )}
                            <button className="btn red lighten-1" type="submit" name="action">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </>
        );
    }
}

export default withRouter(NewUserForm);
