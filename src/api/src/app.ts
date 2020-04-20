import express, { Request, Response, NextFunction, Router } from 'express';

// Import all versions
import v1 from './versions/v1';
const versions: {
    [key: string]: Router;
} = { v1 };

// Create express App
const app: express.Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Get wich versiun user want to use
app.use('/api/:version', function (req: Request, res: Response, next: NextFunction) {
    if (versions[req.params.version]) {
        // Continue in selected version
        versions[req.params.version](req, res, next);
    }

    // If version doesn't exist return Not Found (404)
    else {
        res.status(404).send();
    }
});

app.listen(8000);
