const { model, Schema, Types } = require("mongoose");
const wrapCallbackToPromise = require("../utils/wrapCallbackToPromise");

const schema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    dateOfBirth: Date,
    address: String,
    zipCode: Number,
    city: String,
    phoneNumber: String,
    emailAddress: String,
    isHeadOfHousehold: {
        type: Boolean,
        default: false,
    },
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

    create(user, household = []) {
        const createUser = userModel.create.bind(userModel);
        if (household.length > 0) {
            return wrapCallbackToPromise(createUser, household).then(result => {
                const householdIds = result.map(createdUser => Types.ObjectId(createdUser._id));
                return wrapCallbackToPromise(createUser, {
                    ...user,
                    household: householdIds,
                    isHeadOfHousehold: true,
                });
            });
        }
        return wrapCallbackToPromise(createUser, {
            ...user,
            isHeadOfHousehold: true,
        });
    },

    find(id) {
        return userModel
            .findById(id)
            .populate("eventsAttended")
            .populate("household")
            .exec();
    },

    _addEventToUser(eventId, userId) {
        return userModel.findByIdAndUpdate(userId, {
            $push: {
                eventsAttended: Types.ObjectId(eventId),
            },
        });
    },
};

module.exports = User;
