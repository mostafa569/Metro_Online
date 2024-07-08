const { notificatoinFormat } = require("../services/notificationFormat");
const { validateAcceptHMAC } = require("../services/paymentLogic/paymobUtilities");
const { formatStandardError } = require("../utils/responseModels");
const {sendSuccess}=require("../utils/responseModels")


module.exports.paymobCallback = (req, res, next) => {
    try {
        const callbackData = req.body;
        const receivedHMAC = req.query.hmac;
        if (!validateAcceptHMAC(callbackData, receivedHMAC)) throw formatStandardError(req,401, 'HMAC validation failed',null);
        const { success, amount_cents, payment_key_claims } = callbackData.obj;
        const { relatedData, paymentType, paymentMethod } = payment_key_claims.extra;
        // console.log(metadata);
        // const { relatedData, paymentType, paymentMethod } = JSON.parse(metadata);
        console.log(relatedData);
        console.log(paymentType);

        if (!success) {
            const data = {
                payload: {
                    type: "mixed",
                    error: req.t('payment_failed')
                }
            }
            req.notificatoinData = notificatoinFormat(data, req.firebaseToken);
            req.fail = true;
            next();
        }

        //notify the client

        req.relatedData.user = relatedData.user;
        req.paymentType = paymentType;
        req.paymentMethod = paymentMethod;
        req.firebaseToken = relatedData.firebaseToken

        if (paymentType === 'ticket') {
            console.log("ticket");
            req.relatedData.stationNumber= relatedData.ticketStations;
            req.relatedData.category= relatedData.category;

        } else if (paymentType === 'subscription') {
            req.relatedData.subscriptionId = relatedData.subscriptionId;
            req.relatedData.duration = relatedData.duration;
        } else {
            req.amount = amount_cents / 100;
        }
        sendSuccess(req,res,200,"payment success",null);
        next();

    } catch (err) {
        next(err);
    }

};