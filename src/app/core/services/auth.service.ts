import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, delay } from 'rxjs/operators';

import { UsersService } from 'core/services/users.service';

import { User } from 'core/models/user.class';

@Injectable()
export class AuthService {
  activeUser: User = null;

  constructor(
    private router: Router,
    private usersService: UsersService
  ) { }

  logIn(credentials): Observable<boolean> {
    return this.usersService.getUsers()
      .pipe(
        delay(1000),
        map(users => {
          for (const user of users) {
            if (user.username === credentials.username
              && user.passwordHash === credentials.passwordHash) {
              this.activeUser = user;
              return true;
            }
          }
          return false;
        })
      );
  }

  logOut(): void {
    this.activeUser = null;
    this.redirect();
  }

  checkAuthenticated(): boolean {
    return this.activeUser !== null;
  }

  redirect(): void {
    this.router.navigate([this.checkAuthenticated() ? '/home' : '/login']);
  }
}
