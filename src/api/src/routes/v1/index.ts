import express from 'express';

import Authentication from '../../middlewares/authentication';
import PublicRouter from './public';
import PrivateRouter from './private';

const versionRouter = express.Router({ mergeParams: true });

// Can be redirection to api doc
versionRouter.all('/', function (req, res) {
    res.send('Redirect to doc :)');
});

versionRouter.use(PublicRouter);
versionRouter.use(Authentication, PrivateRouter);

export default versionRouter;
