import React from 'react';
import { RouteProps } from 'react-router-dom';

// Create Components const
const SignUp = React.lazy(() => import('./layout/Unauthorized/SignUp'));
const SignIn = React.lazy(() => import('./layout/Unauthorized/SignIn'));

// Create list for Router
const route: RouteProps[] = [
    { path: '/signUp', exact: true, component: SignUp },
    { path: '/signIn', exact: true, component: SignIn },
];

export default route;
