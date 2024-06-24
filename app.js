const express = require('express');
const app = express();

const contactRoute = require('./routes/contactMe');


app.use('/', contactRoute);

module.exports = app;
