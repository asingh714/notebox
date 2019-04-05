const middleware = require("./middleware");
const express = require("express");

const notesRouter = require("../routes/notes-router");


const server = express();
middleware(server);

server.use("/api/notes", notesRouter)

module.exports = server;