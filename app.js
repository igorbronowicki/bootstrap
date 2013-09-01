var ejs = require('ejs');
var _ = require('underscore');
var express = require('express');


ejs.open = '[%';
ejs.close = '%]';
var app = express();


// app configuration
app.engine('html', require('ejs').__express);
app.set('views', __dirname + '/templates');
app.set('view engine', 'html');
app.use('/static', express.static(__dirname + '/public'));


// routes

// Главная страница сайта
app.get('/', function(req, res) {
    res.render('index', {
        title: "Hello world!"
    });
});


// такое...
app.listen(3000);
console.log('check 127.0.0.1:3000 out');