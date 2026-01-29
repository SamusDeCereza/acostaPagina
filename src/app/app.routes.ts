import { Routes } from '@angular/router';
import { Breadcrumbs } from './pages/breadcrumbs/breadcrumbs';
import { ElementosSitio } from './pages/elementos-sitio/elementos-sitio';
import { Error404 } from './pages/error-404/error-404';
import { Inicio } from './pages/inicio/inicio';
import { MapaSitio } from './pages/mapa-sitio/mapa-sitio';
import { Menu } from './pages/menu/menu';

export const routes: Routes = [
    {
        path: '',
        component: Inicio,
        pathMatch: 'full'
    },
    {
        path: 'elementos',
        component: ElementosSitio,
    },    
    {
        path: 'breadcrumbs',
        component: Breadcrumbs,
    },    
    {
        path: 'mapa-sitio',
        component: MapaSitio,
    },    
    {
        path: 'menu',
        component: Menu,
    },    
    {
        path: '**',
        component: Error404,
    },     

];
