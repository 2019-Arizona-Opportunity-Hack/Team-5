const Event = require("../../../orm/Event");

module.exports = (parent, args, context, info) => {
    if (!args.eventId) {
        return { sucess: false };
    }
    return Event.change(args.eventId, args.changes)
        .then(() => {
            return { success: true };
        })
        .catch(() => {
            return { success: false };
        });
};
