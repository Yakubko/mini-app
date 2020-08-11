import express, { Router } from 'express';
const apiRouter = express.Router({ mergeParams: true });

// Import all versions
import v1 from './versions/v1';
const versions: {
    [key: string]: Router;
} = { v1 };

apiRouter.use('/:version/', (req, res, next) => {
    if (versions[req.params.version]) {
        // Continue in selected version
        versions[req.params.version](req, res, next);
    }

    // If version doesn't exist return Not Found (404)
    else {
        res.status(404).send();
    }
});

export default apiRouter;
