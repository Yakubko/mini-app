import { iModule } from '../../types';

import Auth from '../../../../../services/authentication';

const signIn: iModule = {
    method: 'all',
    path: '/sign-in',
    action: function (req, res) {
        if (req.method !== 'POST') {
            res.set('Allow', 'POST').status(405).send();
            return;
        }

        Auth.signIn('userName', 'password').then(
            (result) => {
                res.json({ token: result });
            },
            () => {
                res.status(401).send();
            },
        );
    },
};

export default signIn;
