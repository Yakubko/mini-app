import { sign, verify } from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

import User from '../models/user';

const TOKEN_SECRET = process.env.TOKEN_SECRET ?? '_test';

type JwtTokenData = { userId: string | number };

class Authentication {
    static async validateToken(token: string): Promise<JwtTokenData> {
        let error: { message: string };
        let ret: JwtTokenData;

        if (token && token.startsWith('Bearer')) {
            token = token.split(' ')[1];
            if (token) {
                try {
                    const jwtData = <JwtTokenData>verify(token, TOKEN_SECRET);
                    const user = await User.get(jwtData.userId);

                    ret = user;
                } catch (err) {
                    error = { message: 'Invalid token.' };
                }
            } else {
                error = { message: 'Token must be provided.' };
            }
        } else {
            error = { message: 'Bearer token must be provided.' };
        }

        return new Promise<JwtTokenData>((resolve, reject) => {
            if (error) {
                reject(error);
            }

            resolve(ret);
        });
    }

    static async signIn(userName: string, password: string): Promise<string> {
        let ret: string | null = null;
        let error: { message: string } | null = null;

        try {
            const user = await User.findBy(userName, 'userName');
            if (user && bcrypt.compareSync(password, user.password)) {
                const jwtData: JwtTokenData = { userId: user.id };
                ret = sign(jwtData, TOKEN_SECRET, { expiresIn: 24 * 7 * 60 * 60 });
            } else {
                error = { message: 'Invalid credentials!' };
            }
        } catch (err) {
            error = { message: 'Invalid credentials!' };
        }

        return new Promise<string>((resolve, reject) => {
            if (error || ret === null) {
                reject(error);
                return;
            }

            resolve(ret);
        });
    }
}

export default Authentication;
