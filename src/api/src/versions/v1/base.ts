import express, { Request, Response, NextFunction } from 'express';
import sequelize from 'sequelize';
import inflection from 'inflection';

import DB from '../../models';

// Create base routing for REST Full API
const baseRouter = express.Router({ mergeParams: true });

let CurrentModel: null | sequelize.Model<any, any, any>;

/**
 * Search for model in db.
 * Here can be check if module have access from outside. Otherwise all models will public.
 * Prefer have some additional layer for model where will be definition for API access
 */
baseRouter.use('/', (req: Request, res: Response, next: NextFunction) => {
    // Singularize model name
    if (DB[inflection.capitalize(inflection.singularize(req.params.modelName))]) {
        // If model exist (have access) continue
        CurrentModel = DB[inflection.capitalize(inflection.singularize(req.params.modelName))];
        next();
    } else {
        // Return Not Found (404)
        res.status(404).send('');
    }
});

// Actions as GET (fetch all), POST (create new) for base path
baseRouter.all('/', (req: Request, res: Response) => {
    if (!['GET', 'POST'].includes(req.method)) {
        res.set('Allow', 'GET, POST').status(405).send();
    }

    switch (req.method) {
        // Get all objects
        case 'GET':
            CurrentModel.findAndCountAll()
                .then(({ count, rows }) => {
                    res.send({
                        result: {
                            data: rows,
                            total: count,
                        },
                    });
                })
                .catch((err) => {
                    res.status(400).send(err.message);
                });
            break;

        // Create new object
        case 'POST':
            const object = CurrentModel.build();
            // This allow set everything. Here should be some check what can be setted from outside.
            // Here also can have model additional layer for model where will be defined what can be setted from outside
            for (let name in object.rawAttributes) {
                if (req.body[name]) {
                    object[name] = req.body[name];
                }
            }

            // Before save and after can be called created facade pattern for model.
            // In facade will be additional actions to avoid duplicate code with small changes

            object
                .save()
                .then((result: any) => {
                    res.send(result);
                })
                .catch((err: any) => res.status(400).json(err.message));
            break;
    }
});

// Actions as GET (get object), PUT (update object), DELETE (delete object) for path with object name
baseRouter.all('/:objectName', (req: Request, res: Response) => {
    if (!['GET', 'PUT', 'DELETE'].includes(req.method)) {
        res.set('Allow', 'GET, PUT, DELETE').status(405).send();
    }

    switch (req.method) {
        // Get object by name
        case 'GET':
            CurrentModel.findOne({
                where: { username: req.params.objectName },
            })
                .then((object) => {
                    if (object) {
                        res.json({
                            result: object,
                        });
                    } else {
                        res.status(404).send('');
                    }
                })
                .catch((err) => {
                    res.status(400).send(err.message);
                });
            break;

        // Update object by name
        case 'PUT':
            CurrentModel.findOne({
                where: { username: req.params.objectName },
            })
                .then((object) => {
                    if (object) {
                        // Here can be added same logic as for create with controlling access from outside
                        for (let name in object.rawAttributes) {
                            if (req.body.hasOwnProperty(name)) {
                                object[name] = req.body[name];
                            }
                        }

                        // Here can be added same logic as for create with facades

                        object
                            .save()
                            .then((result: any) => {
                                res.send(result);
                            })
                            .catch((err: any) => {
                                res.status(400).send(err.message);
                            });
                    } else {
                        res.status(404).send('');
                    }
                })
                .catch((err) => {
                    res.status(400).send(err.message);
                });
            break;

        // Delete object by name
        case 'DELETE':
            CurrentModel.findOne({
                where: { username: req.params.objectName },
            })
                .then((object) => {
                    if (object) {
                        object
                            .destroy()
                            .then(() => {
                                res.send(204);
                            })
                            .catch((err: any) => {
                                res.status(400).send(err.message);
                            });
                    } else {
                        res.status(404).send('');
                    }
                })
                .catch((err) => {
                    res.status(400).send(err.message);
                });
            break;
    }
});

export default baseRouter;
