const User = require("../../../orm/User");

module.exports = (parent, args, context, info) => {
    if (!args.id) {
        return null;
    }
    return User.find(args.id);
};
