const { model, Schema } = require("mongoose");
const wrapCallbackToPromise = require("../utils/wrapCallbackToPromise");

const schema = new Schema({
    firstName: String,
    lastName: String,
    dateOfBirth: Date,
    address: String,
    zipCode: Number,
    city: String,
    phoneNumber: String,
    emailAddress: String,
    isHeadOfHousehold: Boolean,
    gender: String,
    houstingType: String,
    ethnicity: String,
    selfIdentification: [String],
    highestEducationCompleted: String,
    primaryLanguage: [String],
    employmentType: String,
    hasDentalInsurance: Boolean,
    hasPrimaryDoctor: Boolean,
    monthIncome: Number,
    monthlyIncomeType: [String],
    medicalInsuranceType: String,
    childCareType: String,
    houseHold: [Schema.Types.ObjectId],
    eventsAddtended: [Schema.Types.ObjectId],
});

const userModel = model("User", schema);

const User = {
    init() {
        userModel.createCollection();
    },

    create(user) {
        const createUser = userModel.create.bind(userModel);
        return wrapCallbackToPromise(createUser, user);
    },

    find(id) {
        const findById = userModel.findById.bind(userModel);
        return wrapCallbackToPromise(findById, id);
    },
};

module.exports = User;
