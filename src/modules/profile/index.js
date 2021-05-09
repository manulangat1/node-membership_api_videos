import express from 'express';

import ProfileController from './profileController';
import AuthMiddleware from '../../middlewares/AuthMiddleware'
const Router = express.Router();

Router.get(
    '/profile', AuthMiddleware.isAuth,
    ProfileController.fetchProfile
);

Router.put(
    '/profile',
    ProfileController.editProfile
);


export default Router;