import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'core/services/auth.service';
import { UsersService } from 'core/services/users.service';

import { User } from 'core/models/user.class';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  activeState: boolean;
  validationMessage: string;

  loadingState = false;
  credentials = {
    username: '',
    passwordHash: ''
  };

  constructor(
    private usersService: UsersService,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.fillStorage();
    this.loggedIn();
  }

  loggedIn() {
    if ( this.authService.activeUser !== null
      && !this.credentials.username
      && !this.credentials.passwordHash) {
      this.logIn();
    }
  }

  checkLogin() {
    this.loadingState = true;
    this.authService.logIn(this.credentials)
      .subscribe(
        (state) => {
          this.activeState = state;
          if (state) {
            this.logIn();
          } else {
            this.validationMessage = 'wrong username or password';
          }
          this.loadingState = false;
        }
      );

  }

  logIn() {
    this.authService.redirect();
  }

  // Fill the storage on first load
  fillStorage() {
    this.usersService.getUsers()
      .subscribe(
        (users: User[]) => {
          if (!users || !users.length) {
            this.usersService.prefillUsers()
              .subscribe(_ => {
                console.log('users has been loaded');
              } );
          }
        }
      );
  }
}
