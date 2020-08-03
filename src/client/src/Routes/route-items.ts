import { lazy } from 'react';
import { RouteWrapperProps } from './RouteWrapper';

type RouteProps = RouteWrapperProps;

const SignIn = lazy(() => import('../Pages/Auth/SignIn'));
const SignUp = lazy(() => import('../Pages/Auth/SignUp'));

const Dashboard = lazy(() => import('../Pages/Admin/Dashboard/Default'));
const OtherSample = lazy(() => import('../Pages/Admin/Other/SamplePage'));
const OtherDocs = lazy(() => import('../Pages/Admin/Other/Docs'));

const routeItems: RouteProps[] = [
    { path: '/', component: SignIn, layout: 'auth', access: 'public', exact: true },
    { path: '/registration', component: SignUp, layout: 'auth', access: 'both', exact: true },

    { path: '/dashboard', component: Dashboard, layout: 'admin', access: 'private' },
    { path: '/sample-page', component: OtherSample, layout: 'admin', access: 'private' },
    { path: '/docs', component: OtherDocs, layout: 'admin', access: 'private' },
];

export default routeItems;
