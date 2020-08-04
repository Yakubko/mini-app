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
        id: 'navigation',
        title: 'Navigation',
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
    {
        id: 'pages',
        title: 'Pages',
        type: 'group',
        icon: 'icon-pages',
        children: [
            {
                id: 'sample-page',
                title: 'Sample Page',
                type: 'item',
                url: '/sample-page',
                classes: 'nav-item',
                icon: 'feather icon-sidebar',
            },
            {
                id: 'docs',
                title: 'Documentation',
                type: 'item',
                url: '/docs',
                classes: 'nav-item',
                icon: 'feather icon-help-circle',
            },
            {
                id: 'menu-level',
                title: 'Menu Levels',
                type: 'collapse',
                icon: 'feather icon-menu',
                children: [
                    {
                        id: 'menu-level-1.1',
                        title: 'Menu Level 1.1',
                        type: 'item',
                        url: '#!',
                    },
                    {
                        id: 'menu-level-1.2',
                        title: 'Menu Level 2.2',
                        type: 'collapse',
                        children: [
                            {
                                id: 'menu-level-2.1',
                                title: 'Menu Level 2.1',
                                type: 'item',
                                url: '#',
                            },
                            {
                                id: 'menu-level-2.2',
                                title: 'Menu Level 2.2',
                                type: 'collapse',
                                children: [
                                    {
                                        id: 'menu-level-3.1',
                                        title: 'Menu Level 3.1',
                                        type: 'item',
                                        url: '#',
                                    },
                                    {
                                        id: 'menu-level-3.2',
                                        title: 'Menu Level 3.2',
                                        type: 'item',
                                        url: '#',
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
            {
                id: 'disabled-menu',
                title: 'Disabled Menu',
                type: 'item',
                url: '#',
                classes: 'nav-item disabled',
                icon: 'feather icon-power',
            },
        ],
    },
];

export default menuItems;
