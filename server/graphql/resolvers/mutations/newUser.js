const User = require("../../../orm/User");

module.exports = (parent, args, context, info) => {
    if (!args.user) {
        return { success: false };
    }
    return User.create(args.user, args.household)
        .then(() => {
            return { success: true };
        })
        .catch(() => {
            return { success: false };
        });
};
