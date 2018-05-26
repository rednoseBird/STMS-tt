import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LoginRoutingModule } from './core/routings/login-routing.module';
import { LoginComponent } from './components/login/login.component';
import { LoaderComponent } from 'modules/login/shared/loader/loader.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LoginRoutingModule
  ],
  declarations: [
    LoginComponent,
    LoaderComponent
  ]
})

export class LoginModule { }
