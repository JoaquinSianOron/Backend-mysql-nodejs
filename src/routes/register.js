const express = require('express');
const registerController = require('../controllers/register');

var api = express.Router();

api.post('/newRegister', registerController.newRegister);

module.exports = api;
