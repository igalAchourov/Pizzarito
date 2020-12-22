import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/Core/auth.service';
import { Address } from 'src/app/Models/address';
import { Order } from 'src/app/Models/order';
import { UserService } from 'src/app/Core/user.service';
import { PaymentService } from '../../Core/payment.service';
import { OrderService } from 'src/app/Core/order.service';
import { AlertifyService } from 'src/app/Core/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent implements OnInit {
  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any) {
    if (this.editUserAddressForm.dirty || this.ccForm.dirty) {
      $event.returnValue = true;
    }
  }

  isCash: boolean = true;
  ccForm: FormGroup;
  editUserAddressForm: FormGroup;
  addressEditMode: boolean = false;
  onlyNumsRegEx = '^[0-9]*$';
  chargeErrMsg: string =
    'Charge failed! Please check your credit card information';
  chargeDoneMsg: string = 'Payment succeed!';
  address: Address;
  completedOrder: any;

  constructor(
    public authService: AuthService,
    private fb: FormBuilder,
    private userService: UserService,
    private paymentService: PaymentService,
    private orderService: OrderService,
    private alertify: AlertifyService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createCcForm();
    this.createAddressEditForm();
  }

  createCcForm() {
    this.ccForm = this.fb.group({
      ccname: ['', Validators.required],
      ccnumber: [
        '',
        [
          Validators.required,
          Validators.minLength(16),
          Validators.maxLength(16),
          Validators.pattern(this.onlyNumsRegEx),
        ],
      ],
      ccmonth: ['', Validators.required],
      ccyear: ['', Validators.required],
      cvv: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern(this.onlyNumsRegEx),
        ],
      ],
    });
  }

  createAddressEditForm() {
    this.editUserAddressForm = this.fb.group({
      city: [this.authService.currentUser.address.city, Validators.required],
      streetName: [
        this.authService.currentUser.address.streetName,
        Validators.required,
      ],
      streetNumber: [
        this.authService.currentUser.address.streetNumber,
        Validators.required,
      ],
      floor: [this.authService.currentUser.address.floor],
      apartment: [this.authService.currentUser.address.apartment],
    });
  }

  changeAddressEditMode() {
    this.addressEditMode = !this.addressEditMode;
  }

  updateUserAddress() {
    this.address = Object.assign({}, this.editUserAddressForm.value);
    this.userService
      .updateUserAddress(this.authService.decodedToken.nameid, this.address)
      .subscribe((user) => {
        //change current user
        this.authService.currentUser = user;
        //update localstorage
        localStorage.setItem('user', JSON.stringify(user));
        this.changeAddressEditMode();
      });
  }

  PayCreditCard() {
    let value = this.orderService.currentOrder.totalBill.toString() + '00';
    let paymentModel = {
      CardNumber: this.ccForm.value.ccnumber,
      Month: Number(this.ccForm.value.ccmonth),
      Year: Number(this.ccForm.value.ccyear),
      Cvc: this.ccForm.value.cvv,
      Value: Number(value),
    };
    this.paymentService.Pay(paymentModel).subscribe(
      (data) => {
        this.orderService.sendOrder(this.isCash).subscribe(
          (x) => {
           sessionStorage.setItem('completedOrder', JSON.stringify(x));
            this.alertify.success(this.chargeDoneMsg);
          },
          (error) => {
            this.alertify.error('Error occurred, please try again later ');
          },
          () => {
            this.orderService.resetOrder();
            this.router.navigate(['/order_complete']);
          }
        );
        sessionStorage.setItem('completedOrder', JSON.stringify(data));
      },
      (error) => {
        this.alertify.error(this.chargeErrMsg);
      },
     
    );
  }

  PayCash() {
    
    this.orderService.sendOrder(this.isCash).subscribe(
      (data) => {
       sessionStorage.setItem('completedOrder', JSON.stringify(data));
        this.alertify.success(this.chargeDoneMsg);
      },
      (error) => {
        this.alertify.error('Error occurred, please try again later ');
      },
      () => {
        this.orderService.resetOrder();
        this.router.navigate(['/order_complete']);
      }
    );
  }

  Pay() {
    if (this.isCash) {
      this.PayCash();
    } else {
      this.PayCreditCard();
    }
    
  }
}
