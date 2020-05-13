var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
// var logger = require('morgan');
// var cookieParser = require('cookie-parser');
// var bodyParser = require('body-parser');
var routes = require('./routes/index');
var blog = require('./routes/blog');
// var users = require('./routes/users');
var app = express();

app.use(favicon(path.join(__dirname, '/public/img', 'favicon.ico')));
// app.use(logger('dev'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());

// serve raw files from / client
app.use(express.static(path.join(__dirname, 'herehtml')));
// serve static files from /public CSS JAVASCRIPT BOWER-COMPONENTS
app.use(express.static(__dirname + '/public'));

// view engine setup
app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

app.use('/', routes);
app.use('/blogs', blog);








// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


// listen on port 3000
app.listen(process.env.PORT || 3000, function() {
    console.log('Express app listening on port 3000');
});