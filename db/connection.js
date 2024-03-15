const mongoose = require('mongoose');

const dburl = "mongodb+srv://lowesuser:test12345@cluster0.w5ixg.mongodb.net/lowesreactandnode?retryWrites=true&w=majority&appName=Cluster0"
const localdburl = 'mongodb://127.0.0.1:27017/lowesnode'
mongoose.connect(dburl)
  .then(() => console.log('Connected!'))
  .catch((error)=>{console.log("error in db" , error)})


  // cd ~/.ssh 
  // ls
  // cat id_rsa.pub