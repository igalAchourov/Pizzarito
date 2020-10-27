import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/Core/auth.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent implements OnInit {
  isCash: boolean = true;
  ccForm: FormGroup;
onlyNumsRegEx='^[0-9]*$';



  constructor(public authService: AuthService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createCcForm();
  }

  createCcForm() {
    this.ccForm = this.fb.group({
      ccname: ['', Validators.required],
      ccnumber: ['', [Validators.required,Validators.minLength(16),Validators.maxLength(16),Validators.pattern(this.onlyNumsRegEx)]],
      ccexp: ['', Validators.required],
      cvv: ['', [Validators.required,Validators.minLength(3),Validators.pattern(this.onlyNumsRegEx)]],
    });
  }
}
