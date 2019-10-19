const findEvents = require("./queries/findEvents");
const findUsers = require("./queries/findUsers");
const user = require("./queries/user");
const event = require("./queries/event");

const addUserToEvent = require("./mutations/addUserToEvent");
const deleteEvent = require("./mutations/deleteEvent");
const deleteUser = require("./mutations/deleteUser");
const updateEvent = require("./mutations/updateEvent");
const updateUser = require("./mutations/updateUser");

module.exports = {
    Query: {
        // findEvents,
        // findUsers,
        user,
        event,
    },
    Mutation: {
        addUserToEvent,
        deleteEvent,
        deleteUser,
        // updateEvent,
        // updateUser,
    },
};
