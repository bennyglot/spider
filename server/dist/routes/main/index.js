'use strict';

var MainRouter = require('express').Router();

MainRouter.use('/authentication', require('./authentication'));

module.exports = MainRouter;