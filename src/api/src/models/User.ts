import bcrypt from 'bcryptjs';

import Client from '../config/postgres';

class User {
    static async get(id: string | number): Promise<any> {
        let ret: any;
        let error = false;

        try {
            const result = await Client.query('SELECT * FROM system_user WHERE id = $1', [id]);
            if (result.rows.length === 1) {
                ret = result.rows[0];
            } else {
                error = true;
            }
        } catch (err) {
            error = true;
        }

        return new Promise<any>((resolve, reject) => {
            if (error) {
                reject();
            }

            resolve(ret);
        });
    }

    static async getAll(): Promise<any> {
        let ret: any;
        let error = false;

        try {
            const result = await Client.query('SELECT * FROM system_user');
            ret = result.rows;
        } catch (err) {
            error = true;
        }

        return new Promise<any>((resolve, reject) => {
            if (error) {
                reject();
            }

            resolve(ret);
        });
    }

    static async findBy(value: any, key: any): Promise<any> {
        let ret: any;
        let error = false;

        try {
            const result = await Client.query('SELECT * FROM system_user WHERE username = $1', [value]);
            if (result.rows.length === 1) {
                ret = result.rows[0];
            } else {
                error = true;
            }
        } catch (err) {
            error = true;
        }

        return new Promise<any>((resolve, reject) => {
            if (error) {
                reject();
            }

            resolve(ret);
        });
    }

    static async create({ username, full_name, password }: any): Promise<any> {
        let ret: any;
        let error = false;
        let message: any;

        try {
            password = await bcrypt.hash(password, 10);
            const result = await Client.query('INSERT INTO system_user (username, full_name, password) VALUES ($1, $2, $3) RETURNING *', [username, full_name, password]);
            ret = result.rows[0];
        } catch (err) {
            error = true;
            message = err;
        }

        return new Promise<any>((resolve, reject) => {
            if (error) {
                reject(message);
            }

            resolve(ret);
        });
    }
}

export default User;
