const Event = require("../../../orm/Event");

module.exports = (parent, args, context, info) => {
    if (!args.id) {
        return null;
    }
    return Event.find(args.id);
};
