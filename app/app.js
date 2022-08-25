require('dotenv').config('../.env');
const express = require('express');
const {errorHandler} = require('../error/error')
const routes = require('../routes/index');
const app = express();

app.use(require('../middleware/middleware'));
app.use(require('../routes/routes'));
app.use(errorHandler);
app.use(routes);

//app.use(notFoundHandler);



module.exports = app;