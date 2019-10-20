const { GraphQLScalarType } = require("graphql");
const { Kind } = require("graphql/language");

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
        user,
        event,
        findEvents,
        findUsers,
    },
    Mutation: {
        newUser,
        newEvent,
        addUserToEvent,
        updateUser,
        updateEvent,
        deleteUser,
        deleteEvent,
    },
    Date: new GraphQLScalarType({
        name: "Date",
        description: "Date custom scalar type",
        parseValue(value) {
            return new Date(value);
        },
        serialize(value) {
            return value.getTime();
        },
        parseLiteral(ast) {
            if (ast.kind === Kind.INT) {
                return new Date(ast.value);
            }
            return null;
        },
    }),
};
