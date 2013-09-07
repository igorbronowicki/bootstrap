var _ = require('underscore');
var express = require('express');
var consolidate = require('consolidate');
var app = express();


// app configuration
app.engine('ejs', consolidate.ejs);
app.engine('swig', consolidate.swig);
app.engine('jade', consolidate.jade);
app.set('views', __dirname + '/templates');
app.set('view engine', 'ejs');
app.use('/static', express.static(__dirname + '/public'));


// routes
app.get('/', function(req, res) {
    res.render('index', {
        title: "Hello EJS!"
    });
});

app.get('/jade', function(req, res) {
    res.render('index.jade', {
        title: "Hello Jade!"
    });
});

app.get('/swig', function(req, res) {
    res.render('index.swig', {
        title: "Hello Swig!"
    });
});


// такое...
app.listen(3000);
console.log('check 127.0.0.1:3000 out');