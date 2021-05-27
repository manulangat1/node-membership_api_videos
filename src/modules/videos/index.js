import express from 'express'
import AuthMiddleware from '../../middlewares/AuthMiddleware';
import videoController  from "./videoController";


const Router = express.Router()

Router.get('/videos',AuthMiddleware.isAuth,
                videoController.getMovies)
export default Router;