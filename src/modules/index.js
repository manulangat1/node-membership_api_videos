import auth from './auth';
import profile from './profile';
import jobPosts from './jobPosts';
import subscription from "./subscriptions";
import video from "./videos";
const apiPrefix = '/api/v1';

const routes = (app) => {
    app.use(apiPrefix, auth);
    app.use(apiPrefix, profile);
    app.use(apiPrefix, jobPosts);
    app.use(apiPrefix, subscription);
    app.use(apiPrefix, video);
    return app;
}

export default routes;