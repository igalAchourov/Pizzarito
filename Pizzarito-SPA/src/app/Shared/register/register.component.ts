import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../Models/user';
import { AlertifyService } from '../../Core/alertify.service';
import { AuthService } from '../../Core/auth.service';
import { timer } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  user: User;
  registerForm: FormGroup;
  emailRegEx = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
  onlyNumsRegEx = '^[0-9]*$';
submitted:boolean;
siteKey:string;


  constructor(
    private authService: AuthService,
    private alertify: AlertifyService,
    private fb: FormBuilder,
    private router: Router
    
  ) {
    this.siteKey='6Lf2jdIZAAAAAJ_bk6LQZChDOQT5KHWYB9TqeqID';
  }

  ngOnInit(): void {
    this.createRegisterForm();
    this.submitted=false;
  }

  passwordMatchValidator(g: FormGroup) {
    return g.get('password').value === g.get('confirmPassword').value
      ? null
      : { mismatch: true };
  }

  createRegisterForm() {
    this.registerForm = this.fb.group(
      {
        userName: ['', Validators.required],
        fullName: ['', Validators.required],
        email: ['', Validators.pattern(this.emailRegEx)],
        recaptcha: ['', Validators.required],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(20),
          ],
        ],
        confirmPassword: ['', Validators.required],
        address: this.fb.group({
          city: ['', Validators.required],
          streetName: ['', Validators.required],
          streetNumber: ['', Validators.required],
          floor: [''],
          apartment: [''],
        }),
      },
      { validators: this.passwordMatchValidator }
    );
  }

  register() {
    if (this.registerForm.valid) {
      this.user = Object.assign({}, this.registerForm.value);
      this.authService.register(this.user).subscribe(
        () => {
          this.alertify.success('Registration successful');
          this.submitted=true;
        },
        (error) => {
          this.alertify.error(error.error);
        },
        () =>
          setTimeout(() => {
            this.authService.login(this.user).subscribe(() => {
               this.router.navigate(['/menu']);
            });
          }, 3000)
      );
    }
  }

  reset() {
    this.registerForm.reset();
  }




  
}
