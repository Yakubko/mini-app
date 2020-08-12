import { iModule } from '../../types';
import User from '../../../../models/user';

const signUp: iModule = {
    method: 'all',
    path: '/sign-up',
    action: async function (req, res) {
        if (req.method !== 'POST') {
            res.set('Allow', 'POST').status(405).send();
        }

        try {
            const user = await User.create(req.body);
            res.status(201).send(user);
        } catch (err) {
            res.status(400).json(err);
        }
    },
};

export default signUp;
