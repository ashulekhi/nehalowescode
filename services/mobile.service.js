var MobileModel = require("../models/mobile.model")

exports.addMobile = function(data){
  return new Promise(function(resolve,reject){
    var validatedData = new MobileModel(data)
    validatedData.save()
    .then(function(newmobile){
        console.log("new mobile added into db" , newmobile)
        resolve()
    }, function(error){  
            reject()       
    })
  })
}

exports.findAllMobiles = function(){
    return new Promise(function(resolve,reject){
        MobileModel.find()
        .then(function(mobiles){
            resolve(mobiles)
        }, function(error){
            reject()
        })
    })
}