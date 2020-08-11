import { RequestHandler } from 'express';

export interface iModule {
    method: 'use' | 'all' | 'get' | 'post' | 'put' | 'delete';
    path: string;
    action: RequestHandler;
}
