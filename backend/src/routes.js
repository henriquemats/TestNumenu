const express = require("express");

const routes = express.Router();

const SessionController = require("./app/controllers/SessionController");

routes.post("/token", SessionController.store);

module.exports = routes;
