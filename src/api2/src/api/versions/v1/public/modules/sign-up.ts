import { iModule } from '../../types';

const signUp: iModule = {
    method: 'all',
    path: '/sign-up',
    action: function (req, res) {
        if (req.method !== 'POST') {
            res.set('Allow', 'POST').status(405).send();
        }

        res.send('som vo sign-up');
    },
};

export default signUp;
