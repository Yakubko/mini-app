import express, { Request, Response } from 'express';

const dashboardRouter = express.Router({ mergeParams: true });

dashboardRouter.all('/', (req: Request, res: Response) => {
    if (!['GET'].includes(req.method)) {
        res.set('Allow', 'GET').status(405).send();
    }

    res.json({ message: 'Custom endpoint for dashboard', data: [1, 2, 3] });
});

export default dashboardRouter;
