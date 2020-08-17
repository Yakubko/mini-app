import { lazy } from 'react';
import { RouteWrapperProps } from './RouteWrapper';

type RouteProps = RouteWrapperProps;

const SignIn = lazy(() => import('../Pages/Auth/SignIn'));
const SignUp = lazy(() => import('../Pages/Auth/SignUp'));

const Dashboard = lazy(() => import('../Pages/Admin/Dashboard/Default'));
const Users = lazy(() => import('../Pages/Admin/Users'));

const routeItems: RouteProps[] = [
    { path: '/', component: SignIn, layout: 'auth', access: 'public', exact: true },
    { path: '/registration', component: SignUp, layout: 'auth', access: 'both', exact: true },

    { path: '/dashboard', component: Dashboard, layout: 'admin', access: 'private' },
    { path: '/users', component: Users, layout: 'admin', access: 'private' },
];

export default routeItems;
