const { model, Schema, Types } = require("mongoose");
const wrapCallbackToPromise = require("../utils/wrapCallbackToPromise");

const schema = new Schema({
    firstName: String,
    lastName: String,
    dateOfBirth: {
        type: Date,
        default: Date.now,
    },
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
    household: [
        {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
    ],
    eventsAttended: [
        {
            type: Schema.Types.ObjectId,
            ref: "Event",
        },
    ],
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
        return userModel
            .findById(id)
            .populate("eventsAttended")
            .populate("household")
            .exec();
    },

    _addEventToUser(eventId, userId) {
        const findByIdAndUpdate = userModel.findByIdAndUpdate.bind(userModel);
        return wrapCallbackToPromise(findByIdAndUpdate, userId, {
            // eslint-disable-next-line new-cap
            $push: { eventsAttended: Types.ObjectId(eventId) },
        });
    },
};

module.exports = User;
