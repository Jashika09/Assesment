import { Routes } from '@angular/router';
import { homeRoutes } from './home/home-page/home.routes';

export const landingRoutes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    children: homeRoutes
  },
];