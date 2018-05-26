import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LoginRoutingMap } from 'app/modules/login/core/routings/login-routing.map';

@NgModule({
  imports: [RouterModule.forChild(LoginRoutingMap)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
