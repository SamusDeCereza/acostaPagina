export type SiteItemType = 'pagina' | 'seccion';

export type SiteItem = {
    id: string;
    title: string;
    description: string;
    path: string;
    type: SiteItemType;
    section: string;
    keywords: string[];
    otro?: string;
};

export const SITE_INDEX: SiteItem [] = [
    {
        id: 'inicio',
        title: 'Inicio',
        description: 'Pagina principal del sitio de practica',
        path: '/',
        type: 'pagina',
        section: 'Estructura del sitio',
        keywords: [
            'inicio',
            'home',
            'principal',
            'estructura',
        ],
        otro: 'asdasd'
    },
    {
        id: 'elementos',
        title: 'Elementos del sitio',
        description: 'Identifica los elementos que componen un sitio web',
        path: '/elementos',
        type: 'pagina',
        section: 'Estructura del sitio',
        keywords: [
            'elementos',
            'sitio',
            'header',
            'footer',
            'main',
            'layout'
        ],
    },
    {
        id: 'menu',
        title: 'Menu',
        description: 'Elementos principales del menu web y su utilidad',
        path: '/menu',
        type: 'pagina',
        section: 'Navegacion',
        keywords: [
            'menu',
            'navegacion',
            'navbar',
            'links',
            'persistente',
        ],
    },
    {
        id: 'breadcrumbs',
        title: 'Breadcrumbs',
        description: 'Describe el funcionamiento y utilidad de los breadcrumbs',
        path: '/breadcrumbs',
        type: 'pagina',
        section: 'Estructura del sitio',
        keywords: [
            'breadcrumbs',
            'migas',
            'ruta',
            'navegacion',
            'ux',
        ],
    },
    {
        id: 'mapa',
        title: 'Mapa del sitio',
        description: 'Diseño del mapa del sitio y relacion con la navegacion',
        path: '/mapa-sitio',
        type: 'pagina',
        section: 'Estructura del sitio',
        keywords: [
            'mapa',
            'sitio',
            'sitemap',
            'estructura',
            'rutas',
        ],
    },
    {
        id: 'error404',
        title: 'Error 404',
        description: 'Pagina para rutas no existentes (404).',
        path: '/no-existe',
        type: 'seccion',
        section: 'Errores',
        keywords: [
            '404',
            'error',
            'no encontrado',
            'ruta',
        ],
    },    
]