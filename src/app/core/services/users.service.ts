import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { LocalStorageService } from 'core/services/local-storage.service';

import { USERS } from 'core/MOCKUPS/USERS.mockup';
import { User } from 'core/models/user.class';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users$: User[];

  constructor(
    private localStorage: LocalStorageService
  ) { }

  getUsers(): Observable<User[]> {
    return this.localStorage.getData('users')
      .pipe(
        map((Users: User[]) => {
          return this.users$ = Users;
        })
      );
  }

  updateUser(activeUser): Observable<boolean> {
    const newUsers = this.users$.map((v: User) => {
      return v.username === activeUser.username ? activeUser : v;
    });
    return this.fillUsers(newUsers);
  }

  fillUsers(users: User[]): Observable<boolean> {
    return this.localStorage.setData('users', users);
  }

  prefillUsers(): Observable<boolean> {
    return this.fillUsers(USERS);
  }
}
