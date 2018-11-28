exports.request = function(req,res){
    console.log(req.session.userId)
    var id=req.session.userId;
    var pwd=req.body.pwd;
    var name = req.body.pname
    var age = req.body.age
    var contact = req.body.contact
    var hname = req.body.hname
    var date = req.body.date
    var city = req.body.city
    var bg = req.body.bg
    console.log(req.body)
    var sql="SELECT id,first_name,email FROM `volunteers` WHERE `id`='"+id+"' and pwd = '"+pwd+"'";  
    console.log(sql);                         
    db.query(sql, function(err, results){      
          if(results.length){
             console.log(results[0]);
             var email = results[0].email;
             var sql1="SELECT count(*) as ucount FROM `requests`";
             db.query(sql1, function(err, results){      
                if(results.length){
                   console.log(results);
                   var id = results[0].ucount+1;
                   console.log(id);
                   var ins_sql = "INSERT INTO `requests` VALUES ("+id+",'N','"+name+"',"+age+",'O','"+contact+"','"+city+"','"+date+"','"+
                                  bg+"','"+hname+"','"+email+"')";
                  console.log(ins_sql);
                  db.query(ins_sql, function(err,results){
                      console.log("In insertion");
                      console.log(err)
                      if(!err){
                        message = "Request made succesfully!";
                        res.render('dashboard',{alert:'',info: message})
                      }})}})
          }
          else{
             message = 'Wrong Password.';
             res.render('dashboard',{alert: message,info: ''});
          }})}

exports.emergency = function(req,res){
    message='';
    console.log(req.body);
    var name = req.body.name
    var bg = req.body.bg
    var email = req.body.email
    var phone = req.body.phone
    var hname = req.body.hname
    var city = req.body.city
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
     var sql1="SELECT count(*) as ucount FROM `requests`";
             db.query(sql1, function(err, results){      
                if(results.length){
                   console.log(results);
                   var id = results[0].ucount+1;
                   console.log(id);
                   var ins_sql = "INSERT INTO `requests` VALUES ("+id+",'Y','"+name+"',00,'O','"+phone+"','"+city+"','"+date+"','"+
                                  bg+"','"+hname+"','"+email+"')";
                  console.log(ins_sql);
                  db.query(ins_sql, function(err,results){
                      console.log("In insertion");
                      console.log(err)
                      if(!err){
                        message = "Request made succesfully!";
                        res.render('home',{alert:'',info: message})
                      }})}})
    message = "Request succesful";

    res.render('home',{message: message});
 }

 exports.viewrequest = function(req,res){
  var sql = "SELECT id,city,bg,contact FROM requests WHERE status='O'";
  db.query(sql, function(err,results){
    if(results.length){
      // /console.log(results[0].contact);
      res.render('requests',{data: results});
    }
  })
 };