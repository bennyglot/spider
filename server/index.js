require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

const connectionString = process.env.MONGODB_CONNECTION_STRING;
console.log(`connectionString; ${require('dotenv').config({debug: true})}`);
mongoose.connect(connectionString, function (err) {
  if (err) {
    throw err;
  } else {
    console.log(`Successfully connected to ${process.env.MONGODB_CONNECTION_STRING}`);
  }
});


app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})