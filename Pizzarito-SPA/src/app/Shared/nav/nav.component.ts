import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/app/Core/alertify.service';
import { AuthService } from 'src/app/Core/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  constructor(
    private alertify: AlertifyService,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {}

  model: any = {};

  login() {
    this.authService.login(this.model).subscribe(
      (data) => {
        this.alertify.success('logged in successfuly');
      },
      (error) => {
        this.alertify.error(error);
      },
      () => this.router.navigate(['/menu'])
    );
  }

  loggedIn() {
    return this.authService.loggedIn();
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.authService.decodedToken = null;
    this.authService.currentUser = null;
    this.alertify.message('logged out');
    this.router.navigate(['/home']);
  }


}
