exports.signup = function(req,res){
    if(req.method="POST"){
        var first_name = req.body.name.split()[0];
        var last_name = req.body.name.split()[1];
        var dob = req.body.dob;
        var bg = req.body.bg;
        var email = req.body.email;
        var phone = req.body.phone;
        var addr1 = req.body.addr1;
        var addr2 = req.body.addr2;
        var city = req.body.city;
        var lbd = req.body.lbd;
        var pin = req.body.pin;
        var password = req.body.password;
        var cpassword = req.body.cpassword;
        console.log(req.body);
        if( password != cpassword)
        {
            message = "Passwords not matching";
            res.render('signup',{message: message});
            return;
        }
        else{
        var sql1 = "SELECT id,email, first_name FROM `volunteers` WHERE email='"+email+"'";
        db.query(sql1, function(err, results){
            if(results.length){
                message = " Email already registered";
                res.render('signup',{message:message});
                return;
            }
            else{
                var sql2="SELECT count(*) as ucount FROM `volunteers`";                          
        db.query(sql2, function(err, results){      
          if(results.length){
             console.log(results);
             var uid = results[0].ucount+1;
             console.log(uid);
             var ins_sql = "INSERT INTO `volunteers` VALUES ("+uid+",'"+email+"','"+bg+"','"+pin+"','"+
                            first_name+"','"+last_name+"','"+password+"','"+phone+"','"+
                            addr1+"','"+addr2+"','"+city+"','"+dob+"','"+lbd+"')";
            console.log(ins_sql);
            db.query(ins_sql, function(err,results){
                console.log("In insertion");
                console.log(err)
                if(!err){
                    message = "Sign Up Succesful! Log in now";
                    res.render('login',{alert:'',info: message});
                }
            })
          }
          else{
             message = 'Some error';
             res.render('login',{alert:message,info:''});
          }
        })
    }
            })}}};