import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AlertifyService } from '../Core/alertify.service';
import { OrderService } from '../Core/order.service';

@Injectable({
  providedIn: 'root'
})
export class ExtrasGuard implements CanActivate {
  
  constructor(private orderService:OrderService, private router: Router, private alertifyService: AlertifyService) { }

  canActivate(): boolean {
    if (this.orderService.currentOrder.currentPizza) {
      return true;
    }
    this.alertifyService.error('Select size first ');
    this.router.navigate(['menu/pizzas']);
    return false;
  }
  
}
