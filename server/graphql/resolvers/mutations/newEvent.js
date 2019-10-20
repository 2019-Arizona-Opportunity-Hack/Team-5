const Event = require("../../../orm/Event");

module.exports = (parent, args, context, info) => {
    if (!args.event) {
        return { success: false };
    }
    return Event.create(args.event)
        .then(() => {
            return { success: true };
        })
        .catch(() => {
            return { success: false };
        });
};
