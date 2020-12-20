import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PaymentModel } from '../Models/creditCard';
import { AlertifyService } from './alertify.service';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  constructor(private http: HttpClient, private alertify: AlertifyService) {}

  Pay(cc: any) {
    return this.http.post('http://localhost:5000/api/Payment', cc);
  }
}
