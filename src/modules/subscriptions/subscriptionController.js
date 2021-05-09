import dotenv from 'dotenv'
dotenv.config()
// import Stripe from "stripe";
const Stripe = require('stripe')(process.env.SECRET_KEY)
import { Subscription } from '../../database/models'

import responseHandler from '../../helpers/responseHandler'
import errorHandler from  '../../helpers/errorHandler'


// init stripe 

class subscriptionController {
    static async subscribe(req,res){
        try{
            const { amount,plan,planId } = req.body;
            const startDate = new Date()
            const endDate= startDate.getDate() + 7 
            const subscription = await Subscription.create({
                plan,
                planId:planId,
                isActive:true,
                startDate,
                endDate
            })
            return responseHandler(res,"SUbscription successful",201,subscription)
        } catch(error){
            console.log(error.message)
            errorHandler.handleError(error.message,500,res)
        }
    }
}
export default subscriptionController
