require('dotenv').config('../.env');
const express = require('express');
const {errorHandler, notFoundHandler} = require('../error/error')
const app = express();

app.use(require('../middleware/middleware'));
app.use(require('../routes/routes'));
app.use(errorHandler);
app.use(notFoundHandler);



module.exports = app;