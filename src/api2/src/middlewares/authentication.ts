import { RequestHandler } from 'express';
import createError from 'http-errors';

import Auth from '../services/authentication';

const authentication: RequestHandler = (req, res, next) => {
    Auth.validateToken(req.headers['authorization'] ?? '').then(
        (result) => {
            res.locals.auth = result;
            next();
        },
        () => {
            next(createError(401));
        },
    );
};

export default authentication;
