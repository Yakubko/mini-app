import { Application } from 'express';

import expressLoader from './express';
import postgresLoader from './postgres';

export default async ({ expressApp }: { expressApp: Application }): Promise<void> => {
    await postgresLoader();
    expressLoader({ app: expressApp });
};
