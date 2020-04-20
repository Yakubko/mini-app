import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcryptjs';

import DB, { UserInstance } from '../models';

const TOKEN_SECRET = process.env.TOKEN_SECRET;

type JwtTokenDecoded = { userId: UserInstance['id'] };
type AuthVaidateCallback = (err: jwt.VerifyCallback | { message: string }, user?: UserInstance | null) => void;
type AuthSignInCallback = (err: { message: string }, user?: string) => void;

export default class Auth {
    static aclUser: UserInstance | null = null;
    static getAclUser(): UserInstance | null {
        return this.aclUser;
    }

    static validate(callback: AuthVaidateCallback, token: string) {
        if (token && token.startsWith('Bearer')) {
            token = token.split(' ')[1];
            if (token) {
                jwt.verify(token, TOKEN_SECRET, (err, decoded: JwtTokenDecoded) => {
                    if (!err && decoded.userId) {
                        DB.User.findByPk(decoded.userId)
                            .then((user) => {
                                this.aclUser = user;

                                callback(null, user);
                            })
                            .catch((err) => callback(err));
                    } else {
                        callback({ message: 'Token must be provided.' });
                    }
                });
            } else {
                callback({ message: 'Token must be provided.' });
            }
        } else {
            callback({ message: 'Bearer token must be provided.' });
        }
    }

    static signIn(callback: AuthSignInCallback, data: any) {
        if (!data.username || !data.password) {
            return callback({ message: 'Please provide both username and password' });
        }

        DB.User.findOne({
            where: { username: data.username },
        })
            .then((user) => {
                if (user && bcrypt.compareSync(data.password, user.password)) {
                    const jwtData: JwtTokenDecoded = { userId: user.id };
                    const newToken = jwt.sign(jwtData, TOKEN_SECRET, { expiresIn: 24 * 7 * 60 * 60 });

                    callback(null, newToken);
                } else {
                    callback({ message: 'Invalid credentials!' });
                }
            })
            .catch(() => {
                callback({ message: 'Invalid credentials!' });
            });
    }
}
