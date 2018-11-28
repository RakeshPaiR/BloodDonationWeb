var express = require('express')
, routes = require('./routes')
, user = require('./routes/user')
, signup = require('./routes/signup')
, request = require('./routes/request')
, http = require('http')
, path = require('path');
//var methodOverride = require('method-override');
var app = express();
var mysql      = require('mysql');
var bodyParser=require("body-parser");
var connection = mysql.createConnection({
            host     : 'localhost',
            user     : 'admin_elixir',
            password : '',
            database : 'elixir'
          });

connection.connect();

global.db = connection;

// all environments
app.set('port', process.env.PORT || 8080);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

//Middleware
app.listen(8080);
console.log("Listening on http://localhost:8080");
var session = require('express-session');
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))
app.get('/',routes.index);
app.get('/home/dashboard',routes.dashboard);
app.get('/emergency',routes.emergency);
app.get('/login', routes.login);//call for login page
app.get('/signup', routes.signup);//call for signup page
app.post('/signup',signup.signup);
app.post('/login', user.login);//call for login post
app.post('/emergency',request.emergency);
app.get('/request',routes.request);
app.get('/viewrequest',request.viewrequest);
app.post('/request',request.request);
app.get('/logout',user.logout);

 /**
* Module dependencies.
*/
