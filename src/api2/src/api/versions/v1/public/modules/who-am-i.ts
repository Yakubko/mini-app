import { iModule } from '../../types';

const whoAmI: iModule = {
    method: 'all',
    path: '/who-am-i',
    action: function (req, res) {
        res.send('som vo who-am-i ss');
    },
};

export default whoAmI;
