const User = require('../../../models/User');

exports.register = function (req, res) {
    const email = req.body.email;
    const password = req.body.password;
    const user = new User({ email, password });
    
    user.save(function (err) {
        if (err) {
            res.status(500)
                .send("Error registering new user please try again.");
        } else {
            res.status(200).send("Welcome to the club!");
        }
    });
}

exports.test = function (req, res) {
    res.send('hello world');
  }
