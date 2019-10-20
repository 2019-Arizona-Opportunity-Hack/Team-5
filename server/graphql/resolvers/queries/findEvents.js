const Event = require("../../../orm/Event");

module.exports = (parent, args, context, info) => {
    return Event.query(args.query);
};
