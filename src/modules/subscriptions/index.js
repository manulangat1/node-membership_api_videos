import express from 'express'
import AuthMiddleware from '../../middlewares/AuthMiddleware';
import subscriptionController  from "./subscriptionController";


const Router = express.Router();

Router.post('/subscribe', AuthMiddleware.isAuth, subscriptionController.subscribe)

export default Router;