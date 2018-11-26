exports.signup = function(req, res){
    message = '';
    if(req.method == "POST"){
       var message='';
       var sess=req.session;
       if(req.method=="POST"){
          var post = req.body;
          console.log(req.body);
       }
 
    } else {
       res.render('signup',{message: message});
    }
 };

 exports.login = function(req, res){
    var message = '';
    var sess = req.session; 
  
    if(req.method == "POST"){
       var post  = req.body;
       console.log(req.body);
       var name= post.user_name;
       var pass= post.password;
      
       var sql="SELECT id,first_name,last_name FROM `volunteers` WHERE `email`='"+name+"' and pwd = '"+pass+"'";                           
       db.query(sql, function(err, results){      
          if(results.length){
             req.session.userId = results[0].id;
             req.session.user = results[0];
             console.log(results[0].id);
             res.redirect('/home/dashboard');
          }
          else{
             message = 'Wrong Credentials.';
             res.render('login.ejs',{message: message});
          }
                  
       });
    } else {
       res.render('login.ejs',{message: message});
    }         
 };

 exports.emergency = function(req,res){
    message='';
    console.log(req.body);
    res.render('home',{message: message});
 }
