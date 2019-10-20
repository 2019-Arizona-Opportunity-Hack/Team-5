const fs = require("fs");
const path = require("path");
const config = require("../config");

module.exports = {
    typeDefs: fs.readFileSync(path.join(__dirname, "./schema.graphql"), "utf-8"),
    resolvers: require("./resolvers"),
    context: require("./context"),
    playground: !config.server.isProduction,
    introspection: true,
    cacheControl: {
        defaultMaxAge: config.server.isProduction ? 1800 : 0,
    },
};
