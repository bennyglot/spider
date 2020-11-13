require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

const mongoConnectionString = process.env.MONGODB_CONNECTION_STRING;

mongoose.connect(mongoConnectionString, function (err) {
  if (err) {
    throw err;
  } else {
    console.log(`Successfully connected to ${mongoConnectionString}`);
  }
});

require('./routes')(app); 

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})