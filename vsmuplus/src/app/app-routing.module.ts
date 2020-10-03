import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthService } from './auth/auth.service';
import { LandingComponent } from "./landing/landing.component";

const routes: Routes = [
  { path: 'signup', loadChildren: () => import('./signup/signup.module').then(m => m.SignupModule) },
  { path: 'login', loadChildren: () => import('./signin/signin.module').then(m => m.SigninModule) },
  { path: 'admin', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: '', loadChildren: () => import('./index/index.module').then(m => m.IndexModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
