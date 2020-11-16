const User = require('../../../models/User');

exports.register = function (req, res) {
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
}

exports.test = function (req, res) {
    res.send('hello world');
  }
