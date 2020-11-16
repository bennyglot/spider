const AuthenticationRouter = require('express').Router();
const User = require('../../../models/User');

// POST route to register a user
AuthenticationRouter.post('/register', function (req, res) {
  console.log(`body:${req.body}`);
  const { email, password } = req.body;
  const user = new User({ email, password });
  console.log(`user: ${user}`);
  user.save(function (err) {
    if (err) {
      res.status(500)
        .send("Error registering new user please try again.");
    } else {
      res.status(200).send("Welcome to the club!");
    }
  });
});

AuthenticationRouter.get('/test', function (req, res) {
  res.send('hello world');
})

module.exports = AuthenticationRouter;

