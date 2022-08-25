require('dotenv').config('../.env');
const express = require('express');
const {errorHandler} = require('../error/error')
const app = express();

const {registerController, loginController} = require('../controller/auth');
app.use(require('../middleware/middleware'));
app.use(require('../routes/routes'));
app.use(errorHandler);
app.post('/register', registerController);

app.post('/login', loginController);
//app.use(notFoundHandler);



module.exports = app;