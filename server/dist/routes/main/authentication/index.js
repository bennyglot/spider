'use strict';

var AuthenticationRouter = require('express').Router();
var AuthenticationController = require('../../../controllers/main/authentication');

// POST route to register a user
AuthenticationRouter.post('/register', AuthenticationController.register);

// Retrieve all users
AuthenticationRouter.get("/", AuthenticationController.findAll);

// Retrieve a single user with id
AuthenticationRouter.get("/:id", AuthenticationController.findOne);

// Update a user with id
AuthenticationRouter.put("/:id", AuthenticationController.update);

// Delete a user with id
AuthenticationRouter.delete("/:id", AuthenticationController.delete);

// Create a new user
AuthenticationRouter.delete("/", AuthenticationController.deleteAll);

module.exports = AuthenticationRouter;