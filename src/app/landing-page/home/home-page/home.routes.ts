import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page.component';

export const homeRoutes: Routes = [
  {
    path: '',
    loadComponent: async () => (await (import('./home-page.component'))).HomePageComponent,
  }
];