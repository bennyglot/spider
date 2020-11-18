const AuthenticationRouter = require('express').Router();
const jwt = require('jsonwebtoken');
const AuthenticationController = require('../../../controllers/main/authentication');
const withAuth = require('../../../middleware/withAuth');

// POST route to register a user
AuthenticationRouter.post('/', withAuth, AuthenticationController.register);

// Retrieve all users
AuthenticationRouter.get("/", withAuth, AuthenticationController.findAll);

// Retrieve a single user with id
AuthenticationRouter.get("/:id", withAuth, AuthenticationController.findOne);

// Update a user with id
AuthenticationRouter.put("/:id", withAuth, AuthenticationController.update);

// Delete a user with id
AuthenticationRouter.delete("/:id", withAuth, AuthenticationController.delete);

// Create a new user
AuthenticationRouter.delete("/", withAuth, AuthenticationController.deleteAll);

//autenticate
AuthenticationRouter.post('/api/authenticate', AuthenticationController.authenticate);

//checktoken
AuthenticationRouter.get('/checkToken', withAuth, AuthenticationController.checkToken);

module.exports = AuthenticationRouter;