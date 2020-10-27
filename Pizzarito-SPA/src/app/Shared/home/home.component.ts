import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/app/Core/alertify.service';
import { AuthService } from 'src/app/Core/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  model: any = {};

  constructor(private authService:AuthService,private alertify:AlertifyService ,private router:Router) { }

  ngOnInit(): void {
  }


  login() {
    this.authService.login(this.model).subscribe(
      () => {
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

}
