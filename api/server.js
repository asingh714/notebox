const middleware = require("./middleware");
const express = require("express");

const mealRouter = require("../routes/meal-router.js");
const authRouter = require("../auth/auth-router.js");


const server = express();
middleware(server);

server.use("/api/meals", mealRouter);
server.use("/api/auth", authRouter);


module.exports = server;
