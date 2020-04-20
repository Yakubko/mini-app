import Sequelize from 'sequelize';
import { DbInterface } from 'typings/DbInterface';
import { UserFactory, UserInstance } from './User';

export { UserInstance };

const sequelizeConfig = require('../config/sequelizeConfig.json');
const database = process.env.DB_DATABASE;
const username = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const host = process.env.DB_HOST;

const createModels = (sequelizeConfig: any): DbInterface => {
    const params = sequelizeConfig;
    params.host = host;
    const sequelize = new Sequelize(database, username, password, params);

    const db: DbInterface = {
        sequelize,
        Sequelize,
        User: UserFactory(sequelize, Sequelize),
    };

    return db;
};

export default createModels(sequelizeConfig);
