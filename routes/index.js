/*
* GET home page.
*/
 
exports.index = function(req, res){
    var message = '';
  res.render('home',{message: message})};

 exports.login = function(req, res){
    var message = '';
    req.session.userId="NULL";
    res.render('login',{alert:'',info:''})
  };
  exports.signup = function(req, res){
    message = '';
    res.render('signup',{message: message});
    };

  exports.emergency = function(req, res){
    var message = '';
    res.render('emergency',{message: message});
  }
exports.dashboard= function(req,res){
  var message = '';
  console.log(req.session.userid)
  if(req.session.userid != "NULL")
    res.render('dashboard',{message: message})
  else 
  res.render('login',{alert: message,info:''});
};
