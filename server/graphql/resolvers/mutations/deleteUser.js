const User = require("../../../orm/User");

module.exports = (parent, args, context, info) => {
    if (!args.userId) {
        return { success: false };
    }
    return User.delete(args.userId)
        .then(() => {
            return { success: true };
        })
        .catch(() => {
            return { sucess: false };
        });
};
