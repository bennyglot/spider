const AuthenticationRouter = require('express').Router();
const AuthenticationController = require('../../../controllers/main/authentication');

// POST route to register a user
AuthenticationRouter.post('/register', AuthenticationController.register);

AuthenticationRouter.get('/test', AuthenticationController.test);

module.exports = AuthenticationRouter;

