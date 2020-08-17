import { Client } from 'pg';

const client = new Client({
    user: process.env.DB_USER,
    host: process.env.CONTAINER_NAME_DB,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: 5432,
});

export default client;
