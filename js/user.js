exports.login=function(req,res){
    var message='';
    var sess = req.session; 
    if(req.method == "POST"){
      var post  = req.body;
      console.log("in method");
      console.log(req.body);
      console.log(sess);
        }
    console.log("Login POST received");
    res.render('../src/login.ejs',{message:"Wrong Credentials!"});
};
exports.signup=function(req,res){
    console.log("Signup POST received");
};