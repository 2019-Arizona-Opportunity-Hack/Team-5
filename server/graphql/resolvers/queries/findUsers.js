const User = require("../../../orm/User");

module.exports = (parent, args, context, info) => {
    return User.query(args.query);
};
