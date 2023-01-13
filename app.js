const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()

app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan("dev")); 

const multiphy_register = require('./src/routes/register');

app.use('/multiphy', multiphy_register)

module.exports = app;
