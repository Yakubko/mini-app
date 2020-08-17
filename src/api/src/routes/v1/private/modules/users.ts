import { iModule } from '../../types';
import User from '../../../../models/user';

const users: iModule = {
    method: 'all',
    path: '/users',
    action: async function (req, res) {
        try {
            const result = await User.getAll();
            res.send(result);
        } catch (err) {
            res.status(400).send();
        }
    },
};

export default users;
