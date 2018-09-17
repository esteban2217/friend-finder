var express = require('express');
var app = express();
var mysql = require("mysql");
var methodOverride = require('method-override');
    app.use(methodOverride('_method'));
    app.set('view engine', 'ejs');
var friendsRoutes = require('./routes/friends.js');

    app.use('/', friendsRoutes);

    app.listen(3000, function(){
        console.log('listening on 3000');
    });