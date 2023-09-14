import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadComponent: async () => (await import('../app/login/login.component')).LoginComponent
  },
  {
    path: 'home',
    loadComponent: async () => (await import('../app/landing-page/landing-page.component')).LandingPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
