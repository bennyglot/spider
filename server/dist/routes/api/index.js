'use strict';

var ApiRouter = require('express').Router();

ApiRouter.use('/authentication', require('./authentication'));

module.exports = ApiRouter;