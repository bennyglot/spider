const User = require('../../../models/User');

exports.register = (req, res) => {
    const { email, password } = req.body;
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

exports.findOne = (req, res) => {

}

exports.findAll = (req, res) => {

}

exports.update = (req, res) => {

}

exports.delete = (req, res) => {

}

exports.deleteAll = (req, res) => {

}



exports.test = function (req, res) {
    res.send('hello world');
}
