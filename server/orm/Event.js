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

    change(id, changes) {
        return eventModel.findByIdAndUpdate(id, changes).exec();
    },

    delete(id) {
        return eventModel.findByIdAndDelete(id).exec();
    },

    addUserToEvent(eventId, userId) {
        return eventModel
            .find({
                _id: Types.ObjectId(eventId),
                usersAttended: {
                    $in: Types.ObjectId(userId),
                },
            })
            .exec()
            .then(findResult => {
                if (findResult.length > 0) {
                    return Promise.resolve();
                }
                return eventModel
                    .findByIdAndUpdate(eventId, {
                        $push: { usersAttended: Types.ObjectId(userId) },
                    })
                    .exec()
                    .then(() => User._addEventToUser(eventId, userId));
            });
    },
};

module.exports = Event;
