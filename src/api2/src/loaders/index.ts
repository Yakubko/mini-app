import * as express from 'express';
import expressLoader from './express';

export default ({ expressApp }: { expressApp: express.Application }): void => {
    expressLoader({ app: expressApp });
};
