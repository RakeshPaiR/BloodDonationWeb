var express = require('express');
var app = express();
var mysql = require('mysql');
var user = require('./user.js');
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
var connection = mysql.createConnection({
	  host     : 'localhost', //mysql host
	  user     : 'admin_elixir', //mysql database username
	  password : '', //mysql database password
	  database : 'elixir' //mysql database name
});
  
connection.connect(function(err) {
	  if (err) throw err
	  console.log('Connected to local database...')
})
var session = require('express-session');
app.use(session({
	  secret: 'keyboard cat',
	  resave: false,
	  saveUninitialized: true,
	  cookie: { maxAge: 60000 }
}))

app.set('view engine','ejs');

// Binding express app to port 3000
app.listen(3000,function(){
    console.log('Node server running @ http://localhost:3000')
});

app.use('/node_modules',  express.static(__dirname + '/node_modules'));

app.use('/style',  express.static(__dirname + '/style'));
app.get('/',function(req,res){
	res.render('../src/home.ejs');
})
app.get('/login',function(req,res){
	res.render('../src/login.ejs',{message:''});
})
app.post('/login', user.login);
app.get('/signup',function(req,res){
	res.render('../src/signup.ejs');
})
