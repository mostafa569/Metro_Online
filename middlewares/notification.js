const getMessaging = require("firebase-admin/messaging");
const fireBaseApp = require('../config/firebase').fireBaseApp;
const admin = require('firebase-admin');
module.exports.sendNotification = async function (req, res, next) {
    
    if(!req.notificatoinData){
        console.log("a")
       return next();
       
    }
   
    try {
        console.log("a")
        const response = await admin.messaging(fireBaseApp).send(req.notificatoinData.message);
        req.notificatoinData.sent = true;
    } catch (error) {
        console.log(error)
        req.notificatoinData.error = error.message;
    }

    //logic to store notifications in database if needed

    return;
};
