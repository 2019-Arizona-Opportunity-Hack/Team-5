const mongoose = require("mongoose");
const config = require("./config");
const User = require("./orm/User");
const Event = require("./orm/Event");

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/" + config.database.name;

function init() {
    mongoose.connect(MONGODB_URI, {
        useNewUrlParser: config.database.useNewUrlParser,
        useUnifiedTopology: config.database.useUnifiedTopology,
    });
    mongoose.set("useFindAndModify", config.database.useFindAndModify);

    User.init();
    Event.init();
}

module.exports = {
    init,
};
