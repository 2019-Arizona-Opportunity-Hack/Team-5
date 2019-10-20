const User = require("../../../orm/User");

module.exports = (parent, args, context, info) => {
    if (!args.userId) {
        return { sucess: false };
    }
    return User.change(args.userId, args.changes)
        .then(() => {
            return { success: true };
        })
        .catch(() => {
            return { success: false };
        });
};
