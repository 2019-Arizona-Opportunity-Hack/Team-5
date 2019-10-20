const path = require("path");
const config = require("./config");
const database = require("./database");
const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const graphqlConfig = require("./graphql");

const expressServer = express();
const apolloServer = new ApolloServer(graphqlConfig);

expressServer.use(express.urlencoded({ extended: true }));
expressServer.use(express.json());
apolloServer.applyMiddleware({ app: expressServer });
database.init();

if (config.server.isProduction) {
    const productionReactPath = path.join(__dirname, "../client/build/index.html");
    expressServer.use(express.static("client/build"));
    expressServer.get("/*", (_, response) => response.sendFile(productionReactPath));
} else {
    process.on("SIGINT", () => process.close());
}

expressServer.listen(config.server.port, () => {
    console.log(`Server @ http://localhost:${config.server.port}/`);
});
