'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
require('dotenv').config();
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var helmet = require("helmet");
var rateLimit = require("express-rate-limit");
var app = express();
var port = 3000;

var mongoConnectionString = process.env.MONGODB_CONNECTION_STRING;

var limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});

mongoose.connect(mongoConnectionString, function (err) {
  if (err) {
    throw err;
  } else {
    console.log('Successfully connected to ' + mongoConnectionString);
  }
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(helmet());
app.use(limiter);

require('./routes')(app);

app.listen(port, function () {
  console.log('Example app listening at http://localhost:' + port);
});

exports.default = app;