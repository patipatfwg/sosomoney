var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var fundlistRouter = require('./routes/fundlist');

var app = express();

const helmet = require("helmet");
app.use(helmet());

var cors = require('cors')
app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const basicAuth = require('express-basic-auth');

app.use('/', indexRouter);

app.use(
    '/users',
    basicAuth({
        users: { 'admin': '1234' }
    }),
    usersRouter
);

app.use('/fundlist', fundlistRouter);

module.exports = app;
