const { model, Schema } = require("mongoose");
const wrapCallbackToPromise = require("../utils/wrapCallbackToPromise");

const schema = new Schema({
    name: String,
    datetime: Date,
    usersAttended: [Schema.Types.ObjectId],
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
        const findById = eventMode.findById.bind(eventModel);
        return wrapCallbackToPromise(findById, id);
    },
};

module.exports = Event;
