require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const app = express();
const port = 3000;

const mongoConnectionString = process.env.MONGODB_CONNECTION_STRING;

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});

mongoose.connect(mongoConnectionString, function (err) {
  if (err) {
    throw err;
  } else {
    console.log(`Successfully connected to ${mongoConnectionString}`);
  }
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(helmet());
app.use(limiter);

require('./routes')(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})