const { model, Schema } = require("mongoose");

const schema = new Schema({
    name: String,
});

const userModel = model("User", schema);

function init() {
    userModel.createCollection();
}

function findById(id) {
    // TODO: Implement finding a user by an id
}

function createUser(userData) {
    // TODO: Implement creating new users from given user Data
}

module.exports = {
    init,
    findById,
};
