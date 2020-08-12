/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request } from 'express';
import { HttpError } from 'http-errors';
import { errorHandler } from '../../src/middleware/error-handlers';

describe('middleware.ErrorHandler', () => {
    /**
     * Mocked Express Request object.
     */
    let req: Request;

    /**
     * Mocked Express Response object.
     */
    let res: any;

    /**
     * Mocked Express Next function.
     */
    const next = jest.fn();

    /**
     * Reset the `req` and `res` object before each test is ran.
     */
    beforeEach(() => {
        req = {
            params: {},
            body: {},
        } as Request;

        res = {
            statusCode: null,
            statusMessage: null,
            status(status: number) {
                this.statusCode = status;
                return this;
            },
            send(payload: any) {
                this.statusMessage = payload;
            },
        };

        next.mockClear();
    });

    test('should handle error', () => {
        const error = {} as HttpError;
        errorHandler(error, req, res, next);

        expect(res.statusCode).toBeDefined();
        expect(res.statusCode).toBe(500);

        expect(res.statusMessage).toBeDefined();
        expect(res.statusMessage).toBe('Internal Server Error');
    });
});
