import { iModule } from '../../types';

import Auth from '../../../../services/authentication';

const signIn: iModule = {
    method: 'all',
    path: '/sign-in',
    action: function (req, res) {
        if (req.method !== 'POST') {
            res.set('Allow', 'POST').status(405).send();
            return;
        }

        if (!req.body.username || !req.body.password) {
            res.status(400).send('missing params');
            return;
        }

        Auth.signIn(req.body.username, req.body.password).then(
            (result) => {
                res.json({ token: result });
            },
            (err) => {
                res.status(401).send(err);
            },
        );
    },
};

export default signIn;
