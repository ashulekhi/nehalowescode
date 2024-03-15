var MobileService = require("../services/mobile.service")

exports.addMobile = async function(req,h){
   try{
    await MobileService.addMobile(req.body)
    return {
        message:"New Mobile Added"
    }
   }
   catch(e){
    h.response.code(500)
   }

}


exports.getAllMobiles = async (request, h) => {
    try {
        const result = await MobileService.findAllMobiles();
        return {
            data: result
        };
    } catch (error) {
        return h.response().code(500);
    }
};