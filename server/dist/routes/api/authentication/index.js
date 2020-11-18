'use strict';

var AuthenticationRouter = require('express').Router();
var User = require('../../../models/User');

// POST route to register a user
AuthenticationRouter.post('/api/register', function (req, res) {
  var _req$body = req.body,
      email = _req$body.email,
      password = _req$body.password;

  var user = new User({ email: email, password: password });
  user.save(function (err) {
    if (err) {
      res.status(500).send("Error registering new user please try again.");
    } else {
      res.status(200).send("Welcome to the club!");
    }
  });
});

module.exports = AuthenticationRouter;