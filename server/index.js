const path = require("path");
const PORT = process.env.PORT || 3001;

// Initialize Express app
const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

const { ApolloServer } = require("apollo-server-express");
const graphqlSetup = require("./graphql");
const apollo = new ApolloServer(graphqlSetup);
apollo.applyMiddleware({ app });

// Default React route
if (process.env.NODE_ENV === "production") {
    app.get("/*", (_, response) => {
        response.sendFile(path.join(__dirname, "../client/build/index.html"));
    });
}

app.listen(PORT, () => {
    if (process.env.NODE_ENV === "development") {
        console.log(`Server @ http://localhost:${PORT}/`);
    }
});
