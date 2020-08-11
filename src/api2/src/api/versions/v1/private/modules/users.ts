import { iModule } from '../../types';

const users: iModule = {
    method: 'all',
    path: '/users',
    action: function (req, res) {
        res.send('som vo users custom');
    },
};

export default users;
