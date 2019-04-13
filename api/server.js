const middleware = require("./middleware");
const express = require("express");

const mealRouter = require("../routes/meal-router");

const server = express();
middleware(server);

server.use("/api/meals", mealRouter);

module.exports = server;
