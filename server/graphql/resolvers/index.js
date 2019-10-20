const findEvents = require("./queries/findEvents");
const findUsers = require("./queries/findUsers");
const user = require("./queries/user");
const event = require("./queries/event");

const newUser = require("./mutations/newUser");
const newEvent = require("./mutations/newEvent");
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
        newUser,
        newEvent,
        addUserToEvent,
        // addUserToEvent,
        // deleteEvent,
        // deleteUser,
        // updateEvent,
        // updateUser,
    },
};
