import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { AuthService } from 'core/services/auth.service';


@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(
    private authService: AuthService
  ) {}

  canActivate(): boolean {
    return this.checkLogin();
  }

  checkLogin(): boolean {
    if (this.authService.checkAuthenticated()) {
      return true;
    }

    this.authService.redirect();
    return false;
  }
}
