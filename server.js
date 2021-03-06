var http = require("http");
var express = require('express');
var app = express();
var mysql = require('mysql');
var bodyParser = require('body-parser');

//start mysql connection
var connection = mysql.createConnection({
    host: 'localhost', //mysql database host name
    user: 'root', //mysql database user name
    password: '', //mysql database password
    database: 'mydb' //mysql database name
});

connection.connect(function (err) {
    if (err) throw err
    console.log('You are now connected with mysql database...')
})
//end mysql connection

//start body-parser configuration
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
    extended: true
}));
//end body-parser configuration

//create app server
var server = app.listen(3000, "127.0.0.1", function () {

    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)

});

var routes = require('./api/routes/todoListRoutes.js');
routes(app);