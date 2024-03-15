const Express = require("express")
const UserController = require("./controllers/user.controller")
const MobileController = require("./controllers/mobile.controller")
const router = Express.Router()
const AuthService = require("./services/auth.service")

router.get("/allusers", UserController.allUsers)
router.get("/allmobiles", MobileController.getAllMobiles)
router.post("/registeruser" , UserController.createUser)
router.post("/loginaccount" , UserController.loginUser)
router.post("/addnewmobile", AuthService.isAdmin  ,MobileController.addMobile)
router.delete("/deleteaccount",AuthService.isAuthenticated , UserController.deleteAccount)
router.get("/", function(req,res){
    res.send()
})
module.exports = router

