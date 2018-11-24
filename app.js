var express = require('express');
var app = express();

// Binding express app to port 3000
app.listen(3000,function(){
    console.log('Node server running @ http://localhost:3000')
});

app.use('/node_modules',  express.static(__dirname + '/node_modules'));

app.use('/style',  express.static(__dirname + '/style'));
app.get('/',function(req,res){
    res.sendFile('HomePage.html',{'root': __dirname + '/src'});
})
app.get('/login',function(req,res){
	res.sendFile('LoginPage.html',{'root':__dirname + '/src'});
})
app.get('/signup',function(req,res){
	res.sendFile('SignupPage.html',{'root':__dirname + '/src'});
})
app.get('/emergency',function(req,res){
	res.sendFile('EmergencyRequests.html',{'root':__dirname + '/src'});
})
