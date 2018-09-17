var express = require('express');
var app = express();
var router = express.Router();
var mysql = require('mysql');

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

// var path = require("path");

var connection = mysql.createConnection({
host: "localhost",

// Your port; if not 3306
port: 3306,

// Your username
user: "root",

// Your password
password: "",
database: "friends"
});

router.get('/', function(req, res) {
	res.render('pages/index');
});

router.get('/survey', function(req, res) {
	res.render('pages/survey');
});

router.get('/match', function(req, res) {
	res.render('pages/match');
});

module.exports = router;