const Event = require("../../../orm/Event");

module.exports = (parent, args, context, info) => {
    if (!args.eventId) {
        return { success: false };
    }
    return Event.delete(args.eventId)
        .then(() => {
            return { success: true };
        })
        .catch(() => {
            return { sucess: false };
        });
};
