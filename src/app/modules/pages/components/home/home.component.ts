import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'core/services/auth.service';

import { User } from 'core/models/user.class';
import { Coordinates } from 'core/models/coordinates.class';
import { UsersService } from 'core/services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  activeUser: User;
  divCoordinates: Coordinates = {x: 0, y: 0};

  constructor(
    private router: Router,
    private authService: AuthService,
    private usersService: UsersService
  ) { }

  ngOnInit() {
    this.activeUser = this.authService.activeUser;
  }

  ngOnDestroy() {
    this.logOff();
  }

  logOff(): void {
    this.usersService.updateUser(this.activeUser)
      .subscribe(_ => {
        this.authService.logOut();
      });
  }
}
