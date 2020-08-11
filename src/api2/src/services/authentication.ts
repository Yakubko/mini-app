import { sign, verify } from 'jsonwebtoken';
// import bcrypt from 'bcryptjs';

const TOKEN_SECRET = process.env.TOKEN_SECRET ?? '_test';

type JwtTokenData = { userId: number | null };

class Authentication {
    static validateToken(token: string): Promise<JwtTokenData> {
        return new Promise<JwtTokenData>((resolution, reject) => {
            if (token && token.startsWith('Bearer')) {
                token = token.split(' ')[1];
                if (token) {
                    try {
                        const jwtData = <JwtTokenData>verify(token, TOKEN_SECRET);
                        resolution(jwtData);
                    } catch (err) {
                        reject({ message: 'Invalid token.' });
                    }
                } else {
                    reject({ message: 'Token must be provided.' });
                }
            } else {
                reject({ message: 'Bearer token must be provided.' });
            }
        });
    }

    static signIn(userName: string, password: string): Promise<string> {
        if (userName && password) {
        }
        return new Promise<string>((resolution, reject) => {
            const jwtData: JwtTokenData = { userId: 1 };
            const token = sign(jwtData, TOKEN_SECRET, { expiresIn: 24 * 7 * 60 * 60 });

            resolution(token);

            reject({ message: 'Invalid credentials!' });
        });
    }
}

export default Authentication;
