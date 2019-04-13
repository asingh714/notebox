const middleware = require("./middleware");
const express = require("express");

const notesRouter = require("../routes/notes-router");
const mealRouter = require("../routes/meal-router");


const server = express();
middleware(server);

server.use("/api/notes", notesRouter);
server.use("/api/meals", mealRouter);


module.exports = server;
