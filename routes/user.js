

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
             console.log(req.session.userId);
             res.redirect('/home/dashboard');
          }
          else{
             message = 'Wrong Credentials.';
             res.render('login.ejs',{alert: message,info: ''});
          }
                  
       });
    } else {
       res.render('login.ejs',{alert: message,info:''});
    }         
 };

 exports.emergency = function(req,res){
    message='';
    console.log(req.body);
    message = "Request succesful";
    res.render('home',{message: message});
 }
 exports.request = function(req,res){
    var id=req.session.userId;
    var pwd=req.body.pwd;
    console.log(req.body)
    var sql="SELECT id,first_name,email FROM `volunteers` WHERE `id`='"+id+"' and pwd = '"+pwd+"'";  
    console.log(sql);                         
    db.query(sql, function(err, results){      
          if(results.length){
             console.log(results[0]);
             message = "Request made succesfully!";
             //res.redirect('/home/dashboard');
             res.render('dashboard',{alert:'',info: message})
          }
          else{
             message = 'Wrong Password.';
             res.render('dashboard',{alert: message,info: ''});
          }})}

exports.logout=function(req,res){
   console.log(req.session);
   req.session = null;
   res.redirect('login');
};