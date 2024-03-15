const Mongoose = require("mongoose");

const Schema = Mongoose.Schema;


const UserSchema = new Schema({
  email: {type:String,required:true, unique:true},
  password: {type:String,required:true},
  otp:{type:Number,required:true},
  role:{
    type: String,
    enum: ["admin" , "user"],
    default:"user"
  },
  verified:{
    type:Boolean,
    default:false
  }
});

const UserModel = Mongoose.model("users", UserSchema)

module.exports  =UserModel