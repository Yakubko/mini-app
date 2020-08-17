import { RequestHandler } from 'express';

import Auth from '../services/authentication';

const authentication: RequestHandler = (req, res, next) => {
    Auth.validateToken(req.headers['authorization'] ?? '').then(
        (result) => {
            res.locals.auth = result;
            next();
        },
        (err) => {
            res.status(401).json(err);
        },
    );
};

export default authentication;
