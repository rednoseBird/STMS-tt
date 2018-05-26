import { Routes } from '@angular/router';

import { AuthGuardService } from 'core/services/auth-guard.service';

export const RoutingMap: Routes = [
  {
    path: 'login',
    loadChildren: 'modules/login/login.module#LoginModule'
  },
  {
    path: 'home',
    canActivate: [ AuthGuardService ],
    loadChildren: 'modules/pages/pages.module#PagesModule'
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];
