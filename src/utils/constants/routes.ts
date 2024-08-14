
export interface AppLinkProps {
    name: string;
    route: string;
    icon?: any;
}

export const APP_RESOURCES_ROUTES:AppLinkProps[] = [
    {
        name: 'Products',
        route: '#',
    },
    {
        name: 'Customers',
        route: '#',
    },
    {
        name: 'Docs',
        route: '#',
    },
    {
        name: 'Our story',
        route: '#',
    },
    {
        name: 'Pricing',
        route: '#',
    },
]

export const APP_HEADER_NAV_ROUTES:AppLinkProps[] = [
    ...APP_RESOURCES_ROUTES,
    {
        name: 'Contact',
        route: '#',
    },
]

export const APP_HEADER_CTA_ROUTES:AppLinkProps[] = [
    {
        name: 'Login',
        route: '#',
    },
]