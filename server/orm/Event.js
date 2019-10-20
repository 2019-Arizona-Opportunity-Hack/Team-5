const { model, Schema } = require("mongoose");

const schema = new Schema({
    name: String,
});

const eventModel = model("Event", schema);

function init() {
    eventModel.createCollection();
}

module.exports = {
    init,
};
