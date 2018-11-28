/*
* GET home page.
*/
 
exports.index = function(req, res){
    var message = '';
  res.render('home',{message: message})};

 exports.login = function(req, res){
    var message = '';
    req.session.userId=null;
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
  console.log(req.session.userId)
  if(req.session.userId != null)
    res.render('dashboard',{alert: message,info:''})
  else 
  res.redirect('/login')
};
exports.request = function(req,res){
  res.redirect('/home/dashboard');
}
