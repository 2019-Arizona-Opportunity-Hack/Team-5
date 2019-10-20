module.exports = {
    server: {
        port: process.env.PORT || 3001,
        isProduction: process.env.NODE_ENV === "production",
    },
    database: {
        name: "chandlercares",
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    },
};
