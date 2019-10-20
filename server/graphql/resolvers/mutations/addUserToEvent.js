const Event = require("../../../orm/Event");

module.exports = (parent, args, context, info) => {
    if (!args.userId || !args.eventId) {
        return { success: false };
    }
    return Event.addUserToEvent(args.eventId, args.userId)
        .then(() => {
            return { success: true };
        })
        .catch(() => {
            return { success: false };
        });
};
