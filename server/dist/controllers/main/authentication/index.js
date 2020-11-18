"use strict";

var User = require('../../../models/User');

exports.register = function (req, res) {
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
};

exports.findOne = function (req, res) {
    var id = req.params.id;


    User.findById(id).then(function (data) {
        if (!data) res.status(404).send({ message: "Not found User with id " + id });else res.send(data);
    });
};

exports.findAll = function (req, res) {
    var email = req.params.email;

    var condition = email ? { email: { $regex: new RegExp(email), $options: "i" } } : {};

    User.find(condition).then(function (data) {
        res.send(data);
    }).catch(function (err) {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving users."
        });
    });
};

exports.update = function (req, res) {
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }

    var id = req.params.id;

    User.findByIdAndUpdate(id, req.body, { useFindAndModify: false }).then(function (data) {
        if (!data) {
            res.status(404).send({
                message: "Cannot update User with id=" + id + ". Maybe User was not found!"
            });
        } else res.send({ message: "User was updated successfully." });
    }).catch(function (err) {
        res.status(500).send({
            message: "Error updating User with id=" + id
        });
    });
};

exports.delete = function (req, res) {
    var id = req.params.id;

    User.findByIdAndRemove(id).then(function (data) {
        if (!data) {
            res.status(404).send({
                message: "Cannot delete User with id=" + id + ". Maybe User was not found!"
            });
        } else {
            res.send({
                message: "User was deleted successfully!"
            });
        }
    }).catch(function (err) {
        res.status(500).send({
            message: "Could not delete User with id=" + id
        });
    });
};

exports.deleteAll = function (req, res) {
    User.deleteMany({}).then(function (data) {
        res.send({
            message: data.deletedCount + " Users were deleted successfully!"
        });
    }).catch(function (err) {
        res.status(500).send({
            message: err.message || "Some error occurred while removing all Users."
        });
    });
};

exports.test = function (req, res) {
    res.send('hello world');
};