const { model, Schema, Types } = require("mongoose");
const wrapCallbackToPromise = require("../utils/wrapCallbackToPromise");
const User = require("./User");

const schema = new Schema({
    name: String,
    datetime: {
        type: Date,
        default: Date.now,
    },
    usersAttended: [
        {
            type: Schema.Types.ObjectId,
            ref: "User",
            unique: true,
        },
    ],
});

const eventModel = model("Event", schema);

const Event = {
    init() {
        eventModel.createCollection();
    },

    create(event) {
        const createEvent = eventModel.create.bind(eventModel);
        return wrapCallbackToPromise(createEvent, event);
    },

    find(id) {
        return eventModel
            .findById(id)
            .populate("usersAttended")
            .exec();
    },

    addUserToEvent(eventId, userId) {
        const findByIdAndUpdate = eventModel.findByIdAndUpdate.bind(eventModel);
        return wrapCallbackToPromise(findByIdAndUpdate, eventId, {
            // eslint-disable-next-line new-cap
            $push: { usersAttended: Types.ObjectId(userId) },
        }).then(() => User._addEventToUser(eventId, userId));
    },
};

module.exports = Event;
