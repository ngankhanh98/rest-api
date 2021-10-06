var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const routes = require('./routes');
const httpStatus = require('http-status');

var app = express();

app.use('/v1', routes);

app.use((req, res, next) => {
    res.status(httpStatus.NOT_FOUND).send("NOT FOUND");
});

app.use((err, req, res, next) => {
    const code = err.code || 500;
    console.log(code, err.message);
    res.status(code).send(err.message);
  });


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


module.exports = app;
