var Jwt = require("jsonwebtoken")
exports.createToken = function(data){
    var payload = {
        email:data.email,
        role:data.role
    }
    try{
       var token =  Jwt.sign(payload,"mysecretkey")
        return token
    }
    catch(e){
        return e
    }
}

exports.isAdmin = function(req,res){
    var token  = req.get("authorization")
    console.log("token" , token)
    if(token){
        try{
            var payload = Jwt.verify(token,"mysecretkey")
            console.log(">>>>>>> payload" , payload)
            if(payload.role=="admin"){
                next()
            }
            else{
                res.status(401).send()
            }
        }
        catch(e){
            res.status(401).send()
        }
    }
    else{
        res.status(401).send()
    }
}

exports.isAuthenticated = function(req,res){
    var token  = req.get("authorization")
    console.log("token" , token)
    if(token){
        try{
            var payload = Jwt.verify(token,"mysecretkey")
            console.log(">>>>>>> payload" , payload)
            next()
        }
        catch(e){
            res.status(401).send()
        }
    }
    else{
        res.status(401).send()
    }
}