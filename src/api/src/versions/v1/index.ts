import express, { Request, Response, NextFunction, Router } from 'express';

import DB from '../../models';
import Auth from '../../auth/index';
import BaseRouter from './base';

// Import custom endpoints
import DashboardRouter from './dashboard';

const models: { [key: string]: Router } = {};
models['dashboard'] = DashboardRouter;

/**
 * Create routing for global endpoints
 */
const versionRouter = express.Router({ mergeParams: true });

// Can be redirection to api doc
versionRouter.all('/', function (req: Request, res: Response) {
    // res.redirect('https://doc.example.com/api/v1');
    res.send('Redirect to doc :)');
});

/**
 * This endpoint return acl data.
 * If we have accesstoken than return logged user object.
 * Also can contain more global data as user preferred settings for design, menu, ...
 */
versionRouter.all('/who-am-i', function (req: Request, res: Response) {
    if (req.method !== 'GET') {
        res.set('Allow', 'GET').status(405).send();
    }

    Auth.validate((err, user) => {
        const output = {
            user: user || null,
            time: new Date().getTime(),
        };
        res.json(output);
    }, req.headers['authorization']);
});

// Endpoint for sign in authorization
versionRouter.all('/signin', function (req: Request, res: Response) {
    if (req.method !== 'POST') {
        res.set('Allow', 'POST').status(405).send();
    }

    Auth.signIn((err, token) => {
        if (err) {
            res.status(401).json(err);
        } else {
            res.json({ token });
        }
    }, req.body);
});

// Endpoint for sign up request
versionRouter.all('/signup', function (req: Request, res: Response) {
    if (req.method !== 'POST') {
        res.set('Allow', 'POST').status(405).send();
    }

    if (!req.body.username || !req.body.password || !req.body.full_name) {
        res.status(400).json({ message: 'Please provide all inputs' });
    }

    const object = DB.User.build({
        full_name: req.body.full_name,
        username: req.body.username,
        password: req.body.password,
    });

    object
        .save()
        .then((result) => {
            res.json(result);
        })
        .catch((err) => {
            res.status(400).send({ message: err.errors[0].message });
        });
});

/**
 * Continue dynamically based on path.
 * All other endpoints require to be authorized. Exceptions can be added here.
 */
versionRouter.use('/:modelName', function (req: Request, res: Response, next: NextFunction) {
    // Validate user
    Auth.validate((err, user) => {
        if (!err && user) {
            // Check if model name have own router
            if (models[req.params.modelName]) {
                models[req.params.modelName](req, res, next);
            }
            // Use base router
            else {
                BaseRouter(req, res, next);
            }
        } else {
            res.status(401).send();
        }
    }, req.headers['authorization']);
});

export default versionRouter;
