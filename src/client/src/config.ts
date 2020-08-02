export type Config = {
    defaultPath: string;
    collapseMenu: boolean;
    navFixedLayout: boolean;
    boxLayout: boolean;
};

const config: Config = {
    defaultPath: '/dashboard',
    collapseMenu: false,
    navFixedLayout: true,
    boxLayout: false,
};

export default config;
