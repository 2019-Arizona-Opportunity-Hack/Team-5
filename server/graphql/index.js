const fs = require("fs");
const path = require("path");

module.exports = {
    typeDefs: fs.readFileSync(path.join(__dirname, "./schema.graphql"), "utf-8"),
    resolvers: require("./resolvers"),
    context: require("./context"),
    playground: true,
    introspection: true,
};
