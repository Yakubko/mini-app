import express from 'express';
import path from 'path';
import fs from 'fs';

import { iModule } from '../types';

const publicRouter = express.Router({ mergeParams: true });
const normalizedPath = path.join(__dirname, 'modules');

fs.readdirSync(normalizedPath).forEach((file) => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const module: iModule = require('./modules/' + file).default;

    publicRouter[module.method](module.path, module.action);
});

export default publicRouter;
