var express = require('express');
var app = express();

const cors = require('cors');
const bodyParser = require('body-parser');
const basicAuth = require('./_helper/authenticator');
const errorHandler = require('./_helper/errorHandler');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// use basic HTTP auth to secure the api
app.use(basicAuth);

// global error handler
app.use(errorHandler);

// api routes for users
app.use('/users', require('./user/userController'));

// api routes for products
app.use('/products', require('./product/productController'));

module.exports = app;