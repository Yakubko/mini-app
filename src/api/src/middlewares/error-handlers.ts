import { RequestHandler, ErrorRequestHandler } from 'express';
import createError from 'http-errors';

export const notFound: RequestHandler = (req, res, next) => {
    next(createError(404));
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || 'Internal Server Error';

    res.status(status).send(message);
};
