require('dotenv').config('../.env');
const express = require('express');
const {errorHandler} = require('../error/error')
const routes = require('../routes/index');
const app = express();

app.use(require('../middleware/middleware'));
app.use(require('../routes/routes'));
//app.use(errorHandler);
app.use(routes);

app.use((err, _req, res, _next) => {
    console.log(err);
    const message = err.message ? err.message : "Server Error Occured";
    const status = err.status ? err.status : 500;

    res.status(status).json({
        message,
    })
})
//app.use(notFoundHandler);



module.exports = app;