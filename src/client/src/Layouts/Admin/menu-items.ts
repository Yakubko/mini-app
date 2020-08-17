export type MenuItem = {
    id: string;
    title: string;
    type: 'group' | 'item' | 'collapse';
    icon?: string;
    url?: string;
    breadcrumbs?: boolean; // Don't show breadcrumbs
    badge?: {
        type: string;
        title: string;
    };
    target?: string;
    classes?: string;
    external?: string;
    children?: MenuItem[];
};

const menuItems: MenuItem[] = [
    {
        id: 'pages',
        title: 'Pages',
        type: 'group',
        icon: 'icon-pages',
        children: [
            {
                id: 'users',
                title: 'Users',
                type: 'item',
                url: '/users',
                classes: 'nav-item',
                icon: 'feather icon-users',
            },
        ],
    },
    {
        id: 'navigation',
        title: 'From template',
        type: 'group',
        icon: 'icon-navigation',
        children: [
            {
                id: 'dashboard',
                title: 'Dashboard',
                type: 'item',
                url: '/dashboard',
                icon: 'feather icon-home',
            },
        ],
    },
];

export default menuItems;
