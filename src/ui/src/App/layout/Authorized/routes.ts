import React from 'react';
import { RouteProps } from 'react-router-dom';

// Create Components const
const DashboardPage = React.lazy(() => import('./Components/Dashboarad'));
const UsersList = React.lazy(() => import('./Components/UsersList'));

// Create list for Router
const routes: RouteProps[] = [
    { path: '/dashboard', exact: true, component: DashboardPage },
    { path: '/usersList', exact: true, component: UsersList },
];

export default routes;
