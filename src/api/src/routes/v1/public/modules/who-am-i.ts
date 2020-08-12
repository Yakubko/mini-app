import { iModule } from '../../types';
import Auth from '../../../../services/authentication';

const whoAmI: iModule = {
    method: 'all',
    path: '/who-am-i',
    action: async function (req, res) {
        let user = null;
        try {
            user = await Auth.validateToken(req.headers['authorization'] ?? '');
        } catch (err) {}

        res.json(user);
    },
};

export default whoAmI;
