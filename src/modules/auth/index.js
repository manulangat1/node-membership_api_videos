import express from 'express';

import AuthController from './authController';
import AuthMiddleware from '../../middlewares/AuthMiddleware'

const Router = express.Router();

Router.post(
    '/register',
    AuthController.createUser
);

Router.post(
    '/login',
    AuthController.loginUser
);

Router.post(
    '/confirm-email',
    AuthController.confirmEmail
);

Router.post(
    '/forgot-password',
    AuthController.forgotPassword
);

Router.put(
    '/reset-password',
    AuthController.resetPassword
);

export default Router;