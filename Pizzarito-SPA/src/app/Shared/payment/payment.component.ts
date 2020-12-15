import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/Core/auth.service';
import { Address } from 'src/app/Models/address';
import { Order } from 'src/app/Models/order';
import { UserService } from 'src/app/Core/user.service';


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

  address: Address ;

  constructor(
    public authService: AuthService,
    private fb: FormBuilder,
    private userService: UserService
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
      ccexp: ['', Validators.required],
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
      streetName: [this.authService.currentUser.address.streetName,Validators.required],
      streetNumber: [this.authService.currentUser.address.streetNumber,Validators.required],
      floor: [this.authService.currentUser.address.floor,],
      apartment: [this.authService.currentUser.address.apartment]
    });
  }

  changeAddressEditMode() {
    this.addressEditMode = !this.addressEditMode;
  }

  updateUserAddress() {
    this.address = Object.assign({},this.editUserAddressForm.value)
    this.userService.updateUserAddress(this.authService.decodedToken.nameid, this.address).subscribe((user) => {
    //change current user 
      this.authService.currentUser = user;
      //update localstorage
      localStorage.setItem('user', JSON.stringify(user));
      this.changeAddressEditMode();
    });
  }


  doSomething(){
    console.log(this.ccForm);
  }
  // **************************************************************************************************************************************

}
