var UserModel = require("../models/user.model")

exports.addUser = function(data){
  return new Promise(function(resolve,reject){
    data.otp = Math.floor(100000 + Math.random() * 900000)
    var validatedData = new UserModel(data)
    validatedData.save()
    .then(function(newuser){
        console.log("new user added into db" , newuser)
        resolve()
    }, function(error){
        if(error.code==11000){
            reject(409)
        }
        else{
            reject()
        }
    })
  })
    // this function should be just focusing on business logic 
    // i.e taking the data and storign it into db 
    // irrespective of the who is calling it 

    // store it into db

}


exports.findAllUsers = function(){
    return new Promise(function(resolve,reject){
        UserModel.find()
        .then(function(users){
            resolve(users)
        }, function(error){
            reject()
        })
    })
}

exports.deleteUser = function(data){
    return new Promise(function(resolve,reject){
        var query = {
            email:data.email
        }
        UserModel.deleteOne(query)
        .then(function(result){
            resolve(result)
        }, function(error){
            reject()
        })
    })
}

exports.findUser = function(data){
    return new Promise(function(resolve,reject){
        UserModel.findOne(data)
        .then(function(user){
            resolve(user)
        }, function(error){
            reject()
        })
    })
}