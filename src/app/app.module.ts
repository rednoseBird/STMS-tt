import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LocalStorageService } from 'core/services/local-storage.service';
import { AuthService } from 'core/services/auth.service';
import { AuthGuardService } from 'core/services/auth-guard.service';
import { AppRoutingsModule } from 'core/routings/routings.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingsModule
  ],
  providers: [
    LocalStorageService,
    AuthService,
    AuthGuardService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
