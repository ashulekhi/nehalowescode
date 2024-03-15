var UserService = require("../services/user.service")
var AuthService = require("../services/auth.service")
exports.allUsers = async function (req,res){
  try {
    var result = await UserService.findAllUsers()
    res.send({
        data:result
    })
  }
  catch(e){
    if(e){
    res.status(409).send()

    }
    else{
        res.status(500).send()

    }
    
  }
}

exports.createUser = async function(req,res){
    console.log("req body" , req.body)
    try{
        var response =  await  UserService.addUser(req.body)
        res.send({
            message:"user Created"
        })  
    }
    catch(e){
        if(e){
            res.status(409).send()
        
            }
            else{
                res.status(500).send()
        
            }
    }
  
    // here we will add user 
    // and send the response back
}

exports.deleteAccount =async function(req,res){
    
    try{
         await  UserService.deleteUser(req.body)
        res.send({
            message:"User Deleted"
        })  
    }
    catch(e){
       res.status(500).send()
    }
}

exports.loginUser = async  function(req,res){
    try {
        var result =await UserService.findUser(req.body)
        var token = AuthService.createToken(result)
        res.set("authorization", token)
        res.send()
    }
    catch(e){
        console.log("error" , e)
        res.status(500).send()
    }
}